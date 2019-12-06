# loader 与 plugin


## 配置loader

### loader匹配规则
我们在使用`loader`的时候，都是在`modules.rules`中添加新的配置项，在该字段中，每一项被视为一条匹配使用loader的规则
```
最常用的例子

module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.jsx?/,    // 正则匹配条件
                include: [
                    path.resolve(__dirname,'src')
                ],  // 规定规则范围
                use: 'babel-loader' // 规则应用结果
            }
            // ...
        ]
    }
}
```
在`rules`的匹配规则中有两个关键因素：一个是匹配条件，一个是匹配规则后的应用

匹配条件通常都是使用请求资源文件的**绝对路径**来进行匹配

官方文档里将匹配条件定义为`resource`，此外还有比较少用到的`issuer`，则是声明依赖请求的源文件的绝对路径

例如：在`/xx/xxx/xxxx.js`中声明引入`import './src/utils.js`，`resource`是`/xx/xxx/src/utils.js`，`issuer`是`/xx/xxx/xxxx.js`，规则条件会对这两个值进行尝试匹配
```
module.exports = {
    // ...
    rules: [
        {
            resource: {
                test: /\.jsx?/,
                include: [
                    path.resolve(__dirname,'src'),
                ],
            },
            // 如果是使用issuer来匹配，则是issuer: { test: ... }
            use: 'babel-loader'
        }
        // ...
    ]
}
```

### 规则条件匹配
`webpack`的规则提供了多种配置形式：
```
- test: ...     正则匹配特定条件
- include: ...       匹配特定路径
- exclude: ...       排除特定路径
- and: [...]        必须匹配数组中所有条件
- or: [...]     匹配数组中任意一个条件
- not: [...]        排除匹配数组中所有条件
```
```
上述这些条件的值可以是以下5种
- 字符串    必须以提供的字符串开始，所以是字符串的话，这里我们需要提供绝对路径
- 正则表达式        用正则表达式的方式判断条件
- 函数 (path) => string     返回true代表匹配成功
- 数组      至少包含一个条件的数组
- 对象      匹配所有属性值的条件    
```

### module type
**什么是`module type`❓**
`module type`即模块类型的概念，不同模块类型类似于配置了不同的`loader`，`webpack`会有针对性地进行处理

**5种模块类型**

- `javascript/auto`：即 webpack 3 默认的类型，支持现有的各种 JS 代码模块类型 —— CommonJS、AMD、ESM
- `javascript/esm`：ECMAScript modules，其他模块系统，例如 CommonJS 或者 AMD 等不支持，是 .mjs 文件的默认类型
- `javascript/dynamic`：CommonJS 和 AMD，排除 ESM
- `javascript/json`：JSON 格式数据，require 或者 import 都可以引入，是 .json 文件的默认类型
- `webassembly/experimental`：WebAssembly modules，当前还处于试验阶段，是 .wasm 文件的默认类型

如果不希望使用默认的类型的话，在确定好匹配规则条件时，我们可以使用 `type` 字段来指定模块类型，例如把所有的 `JS` 代码文件都设置为强制使用 `ESM` 类型：
```
{
    test: /\.js/,
    include: [
        path.resolve(__dirname,'src')
    ],
    type: 'javascript/esm', // 指定模块类型 （ 默认是 javascript/auto ）
}
```

### 使用loader配置

```
rules: [
    {
        test: /\.less/,
        use: [
            'style-loader', // 直接用字符串表示loader
            {
                loader:'css-loader',
                options:{
                    importLoaders: 1
                }
            }, // 用对象表示 loader，可以传递loader配置等
            {
                loader: 'less-loader',
                options: {
                    noIeCompoat: true
                }, // 传递loader配置
            }
        ]
    }
]
```
上面这个例子种，`use`可以是一个数组，也可以是一个字符串或者表示`loader`的对象。

**PS：** 我们还可以使用`options`给对应的`loader`传递一些配置项


### loader执行顺序
在一个匹配规则中可以配置使用多个`loader`，即一个模块文件可以经过多个`loader`的转换处理，执行的顺序是从最后配置的`loader`开始，由后配置到先配置的顺序，例如上个例子中，`.less`文件会经理`less-loader`到`css-loader`再到`style-loader`的处理，最后成一个可以打包的模块

从后配置到先配置的顺序是在同一个`rule`中的执行方案，那么又有另外一个问题！当一个模块文件同时匹配到多个`rule`，`loader`又会按照什么顺序去应用呢？
```
rules: [
  {
    test: /\.js$/,
    exclude: /node_modules/,  // 排除node_modules
    loader: "eslint-loader",
  },
  {
    test: /\.js$/,
    exclude: /node_modules/, // 排除node_modules
    loader: "babel-loader",
  },
],
```
上面的例子中我们需要在`babel-loader`应用之前先应用`eslint-loader`,我们无法保证按照这种顺序执行

`webpack`在`rules`中提供了一个`enforce`字段，用来配置当前`rule`的`loader`类型，默认是普通类型，而我们可以配置成`pre`或者是`post`

- pre - 前置
- post - 后置

所有的`loader`会按照**前置 → 行内 → 普通 → 后置**的顺序执行，所以我们要确保`eslint-loader`在`babel-loader`之前使用，就需要添加`enforce`字段
```
rules:[
    {
        enforce: "pre", // 前置
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
    }
]
```


### 使用 noParse

`module.noParse`可以用于配置哪些模块文件的内容不需要进行解析。

对于一些不需要解析依赖的库（例如`jquery`），可以通过`noParse`来配置（可提高整体构建速度）

```
module.exports = {
    // ...
    module: {
        noParse: /jquery|lodash/, // 正则表达式

        <!-- 或者使用 function
        noParse(content) {
            return /jquery|lodash/.test(content)
        }, -->
    }
}
```

**❗ 使用`noParse`进行忽略的模块文件中不能使用`import / require / define`等引用方式**


****

## 配置plugin

`plugin`为`webpack`提供额外的功能，由于需要提供不同的功能，不同的插件本身的配置比较多样化

`webpack`插件可以上 https://github.com/webpack-contrib/awesome-webpack#webpack-plugins 进行查阅

### 几个常用插件
#### DefinePlugin
`DefinePlugin`是`webpack`的内置插件，不需要安装，直接通过`webpack.DefinePlugin`使用

作用：创建一些在编译时可以配置的**全局常量**，这些常量的值我们可以在`webpack`的配置中指定
```
module.exports = {
    // ...
    plugins: [
        new webpack.DefinePlugin({
            _GET:JSON.stringify('get'),   // const _GET = 'get'
            _POST:JSON.stringify('post'), // const _POST = 'post'
            _DELETE:JSON.stringify('delete'), // const _DELETE = 'delete'
            _PUT:JSON.stringify('put'), // const _PUT = 'put'
        })
    ]
}
```
这些配置好的全局常量，可以在代码中直接使用
```
console.log('this Api type is' + _GET)
```

**配置规则**
- 如果配置的值是字符串，那么字符串会被当成代码片段来执行，其结果作为最终变量的值，例如`'1 + 1'`，最后结果会是`2`
- 如果配置的值不是字符串，也不是对象字面量，那么值会转换为一个字符串，例如`true`，会被转换成`'true'`
- 如果配置的是一个对象字面量，那么该对象的所有`key`会以相同的方式定义

#### extract-text-webpack-plugin

作用：用来把依赖的`css`分离出来成为单独的文件
```
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loaer',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css')  // 配置文件名
    ]
}
```
```
有时候我们构建的入口不止一个，那么ExtractTextPlugin会为每一个入口创建单独分离的文件

plugins: [
    new ExtractTextPlugin('[name].css')
]
```
**❗ 使用ExtractTextPlugin，还需要调整`loader`对应的配置**


#### ProvidePlugin
`ProvidePlugin`是`webpack`内置的，直接通过`webpack.ProvidePlugin`来使用

作用： 引用某些模块作为程序运行时的变量，不必每次使用都需要`import/require`

```
plugins: [
    new webpack.ProvidePlugin({
        identifier:'xxx',  // 类似于 import 'xxx'  
        // identifier: ['xxx','xxxx']   类似于 import xxxx from 'xxxx'
    })
]
```


#### IgnorePlugin
`IgnorePlugin`是`webpack`内置的，直接通过`webpack.IgnorePlugin`来使用

作用：用于忽略某些特定的模块，让webpack不把这些指定的模块打包进去，例如我们使用了`moment.js`，如果直接引用后，里面会有大量的`i18n`代码，会导致打包出来的文件比较大，而实际上我们并不需要，这就是`IgnorePlugin`的使用场景
```
plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/,/moment$/)
]
```
`IgnorePlugin`的参数
1 - 匹配引入模块路径的正则表达式
2 - 匹配模块的对应上下文，即所在目录名