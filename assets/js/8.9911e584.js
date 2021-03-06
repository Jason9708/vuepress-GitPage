(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"javascript设计模式小册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript设计模式小册"}},[s._v("#")]),s._v(" JavaScript设计模式小册")]),s._v(" "),a("blockquote",[a("p",[s._v("本小册从概念到场景再到示例，解析前端常用设计模式，第一步总览设计模式的前传，也就是面向对象概念以及设计原则，然后对每一个设计模式从介绍到UML类图再到场景与示例，最后对设计原则的验证，让各位对设计模式有一个更深入的了解，能够在日常开发中运用。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("小册以代码为主，所以阅读小册需要有一定的JavaScript基础（ES6）")])]),s._v(" "),a("h3",{attrs:{id:"面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[s._v("#")]),s._v(" 面向对象")]),s._v(" "),a("h4",{attrs:{id:"三要素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三要素"}},[s._v("#")]),s._v(" 三要素")]),s._v(" "),a("ul",[a("li",[s._v("继承：子类继承父类\n"),a("ul",[a("li",[s._v("父类是公共的，不仅仅只服务于一个子类")]),s._v(" "),a("li",[s._v("继承可以将公共方法抽离出来，提高复用性，减少冗余")])])]),s._v(" "),a("li",[s._v("封装：数据的权限和保密（"),a("code",[s._v("Javascript")]),s._v(",甚至"),a("code",[s._v("Es6")]),s._v("本身都没有封装这个概念，但"),a("code",[s._v("Typescript")]),s._v("可实现封装）\n"),a("ul",[a("li",[s._v("关键字（定义属性/方法）\n"),a("ul",[a("li",[a("code",[s._v("public")]),s._v(" 完全开放")]),s._v(" "),a("li",[a("code",[s._v("protected")]),s._v(" 对子类开放")]),s._v(" "),a("li",[a("code",[s._v("private")]),s._v(" 对自己开放")])])]),s._v(" "),a("li",[s._v("特点\n"),a("ul",[a("li",[s._v("减少耦合，不该暴露的不暴露")]),s._v(" "),a("li",[s._v("利于数据，接口的权限管理")]),s._v(" "),a("li",[s._v("Es不支持，我们可以去约定某种形式（ _ 开头）去告诉合作者这是private类型")])])])])]),s._v(" "),a("li",[s._v("多态：同一接口不同实现\n"),a("ul",[a("li",[s._v("Js对于多态的应用极少，因为需要结合Java等语言的接口，重写，重载等功能")]),s._v(" "),a("li",[s._v("未来Ts的大范围普及，多态的功能也会更加显著")]),s._v(" "),a("li",[s._v("特点\n"),a("ul",[a("li",[s._v("保持子类的开放性和灵活性")]),s._v(" "),a("li",[s._v("面向接口编程（Js使用较少）")])])])])])]),s._v(" "),a("h4",{attrs:{id:"js应用举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js应用举例"}},[s._v("#")]),s._v(" Js应用举例")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("JQuery")]),s._v("就是一个class，而"),a("code",[s._v("${'p'}")]),s._v("就是"),a("code",[s._v("JQuery的一个实例")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JQuery")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" slice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("slice\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" dom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取每一个dom元素")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" dom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" len\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selector "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" selector "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// JQuery自身API")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TODO")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TODO")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TODO")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("$")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JQuery")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("使用\nvar $p = $('p')\n$p.append(xxx)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"为何要使用面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为何要使用面向对象"}},[s._v("#")]),s._v(" 为何要使用面向对象")]),s._v(" "),a("ul",[a("li",[s._v("面向对象是为了解决系统的可维护性，可扩展性，可重用性")]),s._v(" "),a("li",[s._v("面向对象实现了一种数据的结构化，是为了表述、模拟世间万事")]),s._v(" "),a("li",[s._v("面向对象的意义是将平整的数据进行结构化。对于计算机而已，结构化才是最简单的、")]),s._v(" "),a("li",[s._v("编程应该做到 简单 & 抽象")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("好处：\n当需求单一，或者简单时我们一步一步操作没有问题，并且效率也挺高。可随着需求的更改，功能的增多，发现于鏊面对每一个步骤很麻烦了，这时就开始思索能不能把步骤和功能进行封装。封装时根据不同的功能，进行不同的封装，功能类似的封装在一起。这样结构就清晰了很多。用的时候找到对应的类就可以了。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"设计原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计原则"}},[s._v("#")]),s._v(" 设计原则")]),s._v(" "),a("h4",{attrs:{id:"何为设计？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何为设计？"}},[s._v("#")]),s._v(" 何为设计？")]),s._v(" "),a("ul",[a("li",[s._v("按照哪一种思路或者标准来实现功能")]),s._v(" "),a("li",[s._v("功能相同，可以有不同的设计方案来实现")]),s._v(" "),a("li",[s._v("随着需求的增加，设计的作用才能体现出来")])]),s._v(" "),a("h4",{attrs:{id:"五大设计原则-（solid）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五大设计原则-（solid）"}},[s._v("#")]),s._v(" 五大设计原则 （SOLID）")]),s._v(" "),a("p",[a("strong",[s._v("❗ 五大设计原则可以说是设计模式的基础，学好设计模式应该先理解五大设计原则")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("S - 单一职责原则\n        - 一个程序只做好一件事\n        - 如果功能过于复杂就拆分开，每个部分保持独立\nO - 开放封闭原则\n        - 对扩展开放，对修改封闭（重点）\n        - 增加需求时，尽量做到扩展新代码，而非修改已有代码\nL - 李氏置换原则\n        - 子类能覆盖父类\n        - 父类能出现的地方子类就能出现\n        - 由于Js是弱类型，以及继承使用较少，所以在Js中应用较少\nI - 接口独立原则\n        - 保持接口的单一独立，功能统一\n        - Js中没有接口（TypeScript除外），使用较少\n        - 类似于单一职责原则，但更关注于接口\nD - 依赖导致原则\n        - 面向接口编程，依赖于抽象而不依赖于具体\n        - 使用方只关注接口而不关注具体类的实现\n        - Js中使用较少（没有接口 & 弱类型）\n\nJavaScript中：S O体现较多 L I D体现较少\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h4",{attrs:{id:"用-promise-来说明-s-与-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-promise-来说明-s-与-o"}},[s._v("#")]),s._v(" 用 Promise 来说明 S 与 O")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载图片")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadImg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" promise "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'img'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onload")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onerror")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'图片加载失败'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" src\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" promise\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadImg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'width：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" img\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'height：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 捕获异常")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("观察上面这个例子，我们可以发现")])]),s._v(" "),a("p",[s._v("单一职责原则体现在我们每一个"),a("code",[s._v("then")]),s._v("只做一件事，如果上面还想再做第三件事，我们就再加一个"),a("code",[s._v("then")]),s._v("，而不是在第一个或第二个"),a("code",[s._v("then")]),s._v("中多做一件事")]),s._v(" "),a("p",[s._v("开放封闭原则体现在如果我们有新的需求进来，我们不需要去修改第一第二个"),a("code",[s._v("then")]),s._v("，而是直接添加一个"),a("code",[s._v("then")]),s._v("去实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("总结：\n单一职责原则：每一个 then 中的逻辑只做好一件事\n开放封闭原则：如果新增需求，扩展 then\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_23种设计模式简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23种设计模式简介"}},[s._v("#")]),s._v(" 23种设计模式简介")]),s._v(" "),a("ul",[a("li",[s._v("创建型\n"),a("ul",[a("li",[s._v("工厂模式（工厂方法模式，抽象工厂模式，建造者模式）")]),s._v(" "),a("li",[s._v("单例模式")]),s._v(" "),a("li",[s._v("原型模式")])])]),s._v(" "),a("li",[s._v("结构型\n"),a("ul",[a("li",[s._v("适配器模式")]),s._v(" "),a("li",[s._v("装饰器模式")]),s._v(" "),a("li",[s._v("代理模式")]),s._v(" "),a("li",[s._v("外观模式")]),s._v(" "),a("li",[s._v("桥接模式")]),s._v(" "),a("li",[s._v("组合模式")]),s._v(" "),a("li",[s._v("享元模式")])])]),s._v(" "),a("li",[s._v("行为型\n"),a("ul",[a("li",[s._v("策略模式")]),s._v(" "),a("li",[s._v("模板方法模式")]),s._v(" "),a("li",[s._v("观察者模式 （Js应用较多）")]),s._v(" "),a("li",[s._v("迭代器模式 （Js应用较多）")]),s._v(" "),a("li",[s._v("职责链模式")]),s._v(" "),a("li",[s._v("命令模式")]),s._v(" "),a("li",[s._v("备忘录模式")]),s._v(" "),a("li",[s._v("状态模式 （Js应用较多）")]),s._v(" "),a("li",[s._v("访问者模式")]),s._v(" "),a("li",[s._v("中介者模式")]),s._v(" "),a("li",[s._v("解释器模式")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);