(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{175:function(e,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"配置webpack-dev-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置webpack-dev-server"}},[e._v("#")]),e._v(" 配置webpack-dev-server")]),e._v(" "),a("p",[e._v("在开发流程中，我们在部署到生产环境之前，都应该是在本地上先开发，运行我们写的代码，我们称为"),a("strong",[e._v("本地环境")]),e._v("，这个环境相当于提供了一个简单的服务器，用于访问"),a("code",[e._v("webpack")]),e._v("构建好的静态文件。")]),e._v(" "),a("p",[e._v("（在开发中我们用它来调式代码）")]),e._v(" "),a("p",[a("code",[e._v("webpack-dev-server")]),e._v("是"),a("code",[e._v("webpack")]),e._v("提供的一个工具，可以基于当前的"),a("code",[e._v("webpack")]),e._v("配置快速启动一个"),a("strong",[e._v("静态服务")]),e._v(".")]),e._v(" "),a("p",[e._v("当"),a("code",[e._v("mode")]),e._v("为"),a("code",[e._v("development")]),e._v("时，会具备热更新的功能（实时根据修改刷新当前页面）")]),e._v(" "),a("h3",{attrs:{id:"webpack-dev-server-官方文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server-官方文档"}},[e._v("#")]),e._v(" webpack-dev-server 官方文档")]),e._v(" "),a("p",[e._v("https://webpack.docschina.org/configuration/dev-server/")]),e._v(" "),a("h3",{attrs:{id:"webpack-dev-server的基础使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server的基础使用"}},[e._v("#")]),e._v(" webpack-dev-server的基础使用")]),e._v(" "),a("p",[a("code",[e._v("webpack-dev-server")]),e._v("是一个依赖包，需要手动安装，然后在已经有"),a("code",[e._v("webpack")]),e._v("配置文件的项目目录下直接使用即可")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install webpack-dev-server -D\n\nwebpack-dev-server --mode development\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("我们也可以通过配置"),a("code",[e._v("package.json")]),e._v("来更改启动命令")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package.json\n\n{\n    // ...\n    "scripts": {\n        "dev": "webpack-dev-server --mode development"\n    }\n}\n\n\n然后命令行使用 npm run dev 即可运行\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[a("strong",[e._v("PS：")]),a("code",[e._v("webpack-dev-server")]),e._v("默认使用"),a("code",[e._v("8080")]),e._v("端口，如果"),a("code",[e._v("webpack")]),e._v("已经配置好了"),a("code",[e._v("html-webpack-plugin")]),e._v("来构建"),a("code",[e._v("html")]),e._v("文件，那么当我们访问"),a("code",[e._v("http://localhost:8080")]),e._v("就可以看到"),a("code",[e._v("index.html")]),e._v("页面，而如果没有进行配置，那么"),a("code",[e._v("webpack-dev-server")]),e._v("会自己生成一个页面用于展示静态资源")]),e._v(" "),a("h3",{attrs:{id:"配置-webpack-dev-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-webpack-dev-server"}},[e._v("#")]),e._v(" 配置 webpack-dev-server")]),e._v(" "),a("p",[a("code",[e._v("devServer")]),e._v("字段是"),a("code",[e._v("webpack")]),e._v("用于配置"),a("code",[e._v("webpack-dev-server")]),e._v("的核心，我们可以在其中实现修改端口等功能")]),e._v(" "),a("h4",{attrs:{id:"常用-devserver-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用-devserver-配置"}},[e._v("#")]),e._v(" 常用 devServer 配置")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- port      用于指定静态服务开启的端口（默认8080）\n- host      用于指定静态服务的主机名（默认是localhost）\n- publicPath        用于指定构建好的静态文件在浏览器中以什么路径去访问（默认是/)\n    - 例如有一个构建好的文件 output.js，完整的访问路径为 http://localhost:8080/output.js , 如果配置了 publicPath: 'assets/'，那么 output.js 的访问路径就是 http://localhost:8080/assets/output.js\n    - 建议生产环境的 devServer.publicPath 与 output.publicPath 的值一致\n- proxy     用于设置请求代理，即将特定URL的请求代理到另外一台服务器上（如果需要请求单独的后端服务API时，可以通过这个配置进行代理）\n\n举个爪子\nproxy: {\n    '/api': {\n        target: \"http://localhost:8000\", // 将URL中带有 /api 的请求代理到 http://localhost:8000 上\n        pathRewrite: { '^/api', '' } // 去掉URL中的 api 部分\n        changeOrigin: true // 本地会虚拟一个服务器接受你的请求并代你发送该请求，可以解决跨域问题\n    }\n}\n\n- contentBase       用于配置提供额外静态文件内容的目录，即配置额外静态文件内容的访问路径（那些不经过webpack构建，但在webpack-dev-server中提供访问的静态资源）\n\n举个爪子：\ncontenBase: path.join(__dirname, \"public\") // 当前目录下的 public\nconstBase: [ path.join(__dirname, \"public\"), path.join(__dirname, \"assets\" )}\n\n- before & after        用于配置用于在`webpack-dev-server`定义额外的中间件\n    - before        在`webpack-dev-server`静态资源中间件处理之后，可以用于拦截部分请求返回特定内容，或者实现简单的数据mock\n    - after     在webpack-dev-server静态资源中间件处理之后，可以用于打印日志等操作\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br")])]),a("h3",{attrs:{id:"配置-webpack-dev-middleware-中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-webpack-dev-middleware-中间件"}},[e._v("#")]),e._v(" 配置 webpack-dev-middleware 中间件")]),e._v(" "),a("p",[a("code",[e._v("webpack-dev-middleware")]),e._v("就是在"),a("code",[e._v("Express")]),e._v("中提供"),a("code",[e._v("webpack-dev-server")]),e._v("静态服务能力的一个中间件")]),e._v(" "),a("p",[a("code",[e._v("webpack-dev-middleware")]),e._v("是一个依赖，需要手动安装")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('npm install webpack-dev-middleware --save-dev\n\n\n在装有express的node服务里\nconst middleware = require("webpack-dev-middleware")\n\napp.use(middleware(xxx,{\n    xxx\n}))\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h3",{attrs:{id:"实现一个简单的mock服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现一个简单的mock服务"}},[e._v("#")]),e._v(" 实现一个简单的mock服务")]),e._v(" "),a("p",[e._v("在日常的工作中，前端人员常常会因为后端接口未完成或者数据返回参差不齐，导致页面开发完后，进度停滞不前，那么我们就需要"),a("code",[e._v("mock")]),e._v("服务来帮助我们模拟后端数据，而"),a("code",[e._v("webpack-dev-server")]),e._v("的"),a("code",[e._v("before")]),e._v("或"),a("code",[e._v("proxy")]),e._v("配置，又或者"),a("code",[e._v("webpack-dev-middleware")]),e._v("结合"),a("code",[e._v("Express")]),e._v("，都可以帮助我们实现简单的"),a("code",[e._v("mock")]),e._v("服务")]),e._v(" "),a("p",[e._v("当我们请求某一个特定的路径时（如"),a("code",[e._v("/market/shopsList")]),e._v("），可以访问我们想要的数据内容")]),e._v(" "),a("p",[e._v("我们先基于"),a("code",[e._v("Express app")]),e._v("实现一个简单的"),a("code",[e._v("mock")]),e._v("功能方法")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.export = function mock(app) {\n    app.get('/market/shopsList', (req,res) => {\n        res.json({\n            data:'' // 模拟返回数据\n        })\n    })\n\n    // ...\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("然后配置"),a("code",[e._v("webpack-dev-server")]),e._v("中的"),a("code",[e._v("before")]),e._v("字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const mock= require('./mock')\n\nbefore(app) {\n    mock(app) // 调用mock函数\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);