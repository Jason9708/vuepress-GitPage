# 单例模式

### 介绍
- 系统中被唯一使用
- 一个类只能初始化一个实例

### 代码演示
```js
class SingleObject {
    login() {
        console.log('login...')
    }
}

SingleObject.getInstance = (() => {
    let instance
    return () => {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

// Test : 注意由于Js没有private等修饰符，所以只能使用静态函数getInstance，不能使用new SingleObject()
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2) // true，两者是同一实例，必须完全相等

let obj3 = new SingleObject() // 无法完全控制
console.log(obj1 === obj3) // false
```

### 示例
- 登陆框（再复杂，也只能有一个）
- 购物车（一个商城app，也是只能有一个购物车）

### 场景
- JQuery中只有一个 $
```
// JQuery 只有一个 $
if(window.jQuery != null){
    return window.jQuery
}else{
    // 初始化...
}


这里的代码实现与我们的单例模式不一样，但思想是一样的（有则返回，无则创建）
```
- 模拟登录框（登陆框只有一个)
```js
// 使用单例思想
class LoginForm {
    constructor() {
        this.state = 'hide'
    }
    show() {
        if(this.state === 'show'){
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登陆框显示成功')
    }
    hide() {
        if(this.state = 'hide'){
            alert('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框隐藏成功')
    }
}

LoginForm.getInstance = (() => {
    let instance
    return function() {
        if(!instance) {
            instance = new LoginForm()
        }
        return instance
    }
})()

// Test
let login1 = LoginForm.getInstance()
login1.show() // console : 登陆框显示成功

let login2 = LoginForm.getInstance()
login2.hide() // alert ： 已经隐藏

console.log('login1 === login2', login1 === login2) // true
```
- 其他
    - 购物车（和登录框类似）
    - `vuex`和`redux`中的`store`

### 设计原则验证
只实例化唯一的对象，符合单一职责原则

没法具体体现开放封闭原则，但是绝不违背开放封闭原则