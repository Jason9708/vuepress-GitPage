# 通过webpack优化前端环境

## 优化前端资源加载 - 图片加载与代码压缩

我们总是希望浏览器在加载页面时用的时间越短越好，所以构建出来的文件应该越少越小越好，一来减少浏览器需要发起请求的数量，二来减少下载请求资源的时间

其实`webpack`把多个代码文件打包成几个必须的静态资源，已经很大程度减少了静态资源请求数量了

下面我们使用`webpack`实现更多的前端资源加载的优化需求

### Css Sprites
`Css Sprites`技术是前端领域一种常见的用于减少图片资源请求数的优化方式

如果使用的是`webpack 3.x`，需要`Css Sprites`的话，可以使用`webpack-spritesmith`或者`sprite-webpack-plugin`

```
以webpack-spritesmith为例子，安装依赖  npm install webpack-spritesmith --save-dev

修改webpack配置

module: {
    loader: [
        // ... 这里需要有处理图片的loader，如file-loader
    ]
},
resolve: {
    modules: [
        'node_modules',
        'spritesmith-generated', // webpack-spritesmith 生产所需文件的目录
    ]
},
plugins: [
    new SpritesmithPlugin({
        src: {
            cwd: path.resovle(__dirname, 'src/ico'), // 多个图片所在的目录
            glob: '*.png'  // 匹配图片的路径
        },
        target: {
            // 生产最终图片的路径
            image: path.resovle(__dirname, 'src/spritesmith-generated/sprite.png'),
            // 生成所需 SASS/LESS/Stylus mixins代码，我们使用Stylus预处理器作为例子
            css: path.resolve(__dirname, 'src/spritesmith-generated/sprite.styl'),
        },
        apiOptions: {
            cssImgRef: "~sprite.png"
        }
    })
]
```
```
在你需要的样式代码中使用`sprite.styl`，只需引入后调用需要的`mixins`

@import `~sprite.styl`

.close-button
    sprite($close)
.open-button
    sprite($open)
```

**❗ `webpack-spritesmith`和`sprite-webpack-plugin`还没更新到`webpack 4.x`，需要配合`postcss`和`postcss-sprites`，才能实现**


### 图片压缩
图片资源会占用前端资源的很大一部分，`file-loader`可以用来处理图片文件，在次基础上，我们还可以再添加一个`image-webpack-loader`来压缩处理图片
```
module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /.*\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { // 压缩 jpeg 的配置
                                progressive: true,
                                quality: 65
                            },
                            optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
                                enabled: false,
                            },
                            pngquant: { // 使用 imagemin-pngquant 压缩 png
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: { // 压缩 gif 的配置
                                interlaced: false,
                            },
                            webp: { // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```

### 使用DataURL
有些时候我们会有一些很小的图片，并不想用`Css Sprites`的方式来处理，那么我们可以在`webpack`中使用`url-loader`来处理这些很小的图片 （常用）

`url-loader` 与 `file-loader` 的功能类似，但是在处理文件的时候，可以通过配置指定一个大小，当文件小于这个配置时，`url-loader`会将其转换成一个`base64`编码的`DataURL`
```
module.exports = {
    // ...
    modules:{
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // 单位是 Byte，当文件小于 8KB 时作为 DataURL 处理
                        },
                    },
                ],
            }
        ]
    }
}
```

### 代码压缩
`webpack 4.x`版本运行的时候，`mode`为`production`时会启动压缩`Js`的插件，而`webpack 3.x`，使用压缩`Js`代码插件的是`uglifyjs-webpack-plugin`

在生产环境中，压缩`Js`代码基本是一个必不可少的步骤，这样可以大大减小`JavaScript`的体积

除了压缩`Js`代码之外，我们还可以压缩`Html,Css`，虽然这种压缩只能移除空格换行等无功能性字符，但也能在一定程度上减小文件大小，在`webpack`中的配置使用也不是特别麻烦，所以我们通常也会使用

对于`HTML`文件，可以使用` html-webpack-plugin`插件
```
module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: path.join(__dirname, './src/index.html'),// 配置文件模板
      minify: { // 压缩 HTML 的配置
        minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
        minifyJS: true // 压缩 HTML 中出现的 JS 代码
      }
    }),
  ],
}
```

对于`css`文件，可以使用`css-loader`，也提供了压缩`CSS`代码的功能
```
module.exports = {
  module: {
    rules: [
      // ...
      {
        test: /\.css/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true, // 使用 css 的压缩功能
            },
          },
        ],
      },
    ],
  }
}
```
在`css-loader`的选项中配置`minimize`字段为`true`来使用`css`压缩代码的功能

`css-loader`是使用`cssnano`来压缩代码的，`minimize`字段也可以配置为一个对象，来将相关配置传递给 `cssnano`

关于`cssnano`内容可参考 https://cssnano.co/ 

****

## 优化前端资源加载 - 分离代码文件

如何利用浏览器的缓存以及在`webpack`中实现按需加载代码

### 分离代码文件

关于分离`css`文件，我们可以使用`webpack`中的`extract-text-webpack-plugin`插件

**为什么要把`css`文件分离出来，而不是直接一起打包在`Js`中？**

最主要的原因是我们希望更好地利用缓存，假设我们原本页面的静态资源都打包成一个`Js`文件，加载页面时虽然只需要加载一个`Js`文件，
但一旦我们的代码改变了，用户访问新的页面时就需要重新加载一个新的`Js`文件。有些情况下，我们只是单独修改了样式，这样也要重新加载整个应用的`Js`文件，是很不划算的

还有一种情况是我们有多个页面，它们都可以共用一部分样式，如果每个页面都单独打包成一个`Js`文件，那么每次访问页面都会重复加载原本可以共享的`Css`代码。

而如果是分离开，第二个页面就有了`Css`文件的缓存，访问速度自然更快，虽然对第一个页面来说多了一个请求，但缓存带来的速度提升是更可观的

**那么如何使用webpacl来把代码中公共使用的部分分离成独立的文件呢？**

`webpack 4.x`与`webpack 3.x`在代码分离这部分的做法区别较大

`webpack 3.x`以前的版本是使用`CommonsChunkPlugin`来做代码分离的，而`webpack 4.x`则是把功能移到了`optimize.splitChunks`中，直接使用该配置就可以实现代码分离

#### webpack 4.x 的 optimization
```
module.exports = {
    // ... webpack配置
    optimization: {
        splitChunks: {
            chunk: "all",  // 所有的chunks代码公共的部分分离出来成为一个单独的文件
        }
    }
}
```
我们需要在`HTML`中引用两个构建出来的`Js`文件，并且`common.js`需要在入口代码之前，下面是个简单的例子
```
<script src="commons.js" charset="utf-8"></script>
<script src="entry.bundle.js" charset="utf-8"></script>
```

之前我们提到拆分文件是为了更好地利用缓存，分离公共类库很大程度上是为了让多页面利用缓存，从而减少下载的代码量，同时，也有代码变更时可以利用缓存减少下载代码量的好处。从这个角度出发，个人建议将公共使用的第三方类库显式地配置为公共的部分，而不是 webpack 自己去判断处理。因为公共的第三方类库通常升级频率相对低一些，这样可以避免因公共 chunk 的频繁变更而导致缓存失效。

**显式配置共享类库操作**
```
module.exports = {
  entry: {
    vendor: ["react", "lodash", "angular", ...], // 指定公共使用的第三方类库
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor", // 使用 vendor 入口作为公共部分
          enforce: true,
        },
      },
    },
  },
  // ... 其他配置
}

// 或者
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /react|angluar|lodash/, // 直接使用 test 来做路径匹配
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
}

// 或者
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: path.resolve(__dirname, "node_modules") // 路径在 node_modules 目录下的都作为公共部分
          name: "vendor", // 使用 vendor 入口作为公共部分
          enforce: true,
        },
      },
    },
  },
}
```
上述第一种做法是显示指定哪些类库作为公共部分，第二种做法实现的功能差不多，只是利用了 test 来做模块路径的匹配，第三种做法是把所有在 node_modules 下的模块，即作为依赖安装的，都作为公共部分。你可以针对项目情况，选择最合适的做法。


#### webpack 3.x 的 CommonsChunkPlugin
`webpack 3.x`以下的版本需要用到`webpack`自身提供的`CommonsChunkPlugin`插件
```
module.exports = {
    // ...
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons', // 公共使用的chunk的名称
            filename: 'commons.js', // 公共chunk的生成文件名
            minChunks：3, // 公共的部分必须被3个chunk共享
        })
    ]
}
```
`chunk`在这里是构建的主干，可以简单理解为一个入口对应一个`chunk`

以上插件配置的构建后会生成一个`commons.js`文件，该文件就是代码中的公共部分，上面的配置中`minChunks`为3，意思是当一个模块被3个以上的`chunk`依赖时，这个模块就会被划分到`commons`chunk中去。

`CommonsChunkPlugin`也是支持显示配置共享类库的
```
module.exports = {
  entry: {
    vendor: ['react', 'react-redux'], // 指定公共使用的第三方类库
    app: './src/entry',
    // ...
  },
  // ...
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // 使用 vendor 入口作为公共部分
      filename: "vendor.js", 
      minChunks: Infinity, // 这个配置会让 webpack 不再自动抽离公共模块
    }),
  ],
}
```
上述配置会生成一个名为`vandor.js`的共享代码文件，里面包含了`React`和`React-Redux`库的代码，可以提供给多个不同的入口代码使用。

这里`minChunks`配置使用了`Infinity`，可以理解为`webpack`不自动抽离公共模块。（如果这里指定了3，那么被3个以上的`chunk`依赖的模块会和`React，React-Redux`一同打包进`vendor`,这样就失去显示指定的意义

****

## 优化前端资源加载 - 进一步控制Js大小

### 按需加载
前面讲述如何将大的代码文件进行拆分，抽离出多个页面共享的代码文件，但是当你的`Web`应用是个单页面应用(Vue),并且及其复杂的时候，你会发现有一些代码并不是每一个用户都需要用到的。

我们希望可以将这一部分代码抽离出去，仅当用户真正需要用到时才加载，这时就可以使用`webpack`的按需加载功能

在`webpack`的构建环境中，要按需加载代码模块很简单，遵循`ES`标准的动态加载语法`dynamic-import`来编写代码即可，`webpack`会自动处理使用该语法编写的模块
```
// import 作为一个方法使用，传入模块名即可，返回一个Promise对象来获取模块暴露的对象

import('lodash').then( _ => {
    console.log(_.lash([1,2,3])) // 打印3
})


这里,webpack构建时会自动把lodash模块分离出来，并且在代码内部实现动态加载lodash的功能

动态加载代码模块依赖于网络，所以模块内容会异步返回，

因此import方法需要返回一个promise来获取动态加载的模块内容
```
**❗ 如果使用了`Babel`的话，还需要`Syntax Dynamic Import`这个`Babel`插件来处理`import()`这种语法**

由于动态加载代码模块的语法依赖于`promise`，对于低版本的浏览器，需要添加`promise`的`polyfill`后才能使用


### Tree Shaking
`Tree Shaking`可以移除`Js`上下文中的未引用代码，删除用不着的代码，能够有效减少`JS`代码文件的大小
```
官方例子

// src/math.js
export function square(x) {
    return x * x
}
export function cube(x) {
    return x * x * x
}

// src/index.js
import { cube } from './math.js'
console.log(cube(3))
```
很明显，`square`这个方法未被引用，是可以删掉的。

在`webpack`中，只有启动了`Js`代码压缩功能（即使用 `uglify`）时，会做`Tree shaking`优化
-   `webpack 4.x`需要指定`mode`为`production`
-   `webpack 3.x`需要配置`UglifyJsPlugin`

启动之后，构建出来的包就会移除`square`这部分代码


**PS:**
```
如果你在项目中使用了Babel的话，要把Babel解析模块语法的功能关掉，在.babelrc配置中增加 "modules":false 这个配置


// .babelrc
{
    "presets":[["env",{ "modules": false }]]
}

这样可以把`import/export`这一部分模块语法交由`webpack`处理，否则无法使用`Tree Shaking`的优化
```

