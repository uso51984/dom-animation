## dom-animation
---

## 安装
```
npm i dom-animation
```

## 引入方式

CommonJS 或者 es6引入方式
```js
  import DomAnimation from 'dom-animation';
```

原始引入方式
```html
    <script type="text/javascript" src="print-html-element.js"></script>
```
> dom-animation.[min].js在dist目录

使用
```
domAnimation(el, transitionName, endMethod)
```
> 参数说明：
* el： dom 原生对象
* transitionName： 类型，string | object, 为配置好动画的css class name
```
# if transitionName is string
const className = transitionName;
const activeClassName = `${transitionName}-active`
# if transitionName is object
const className = transitionName.name;
const activeClassName = transitionName.active
```
* endMethod: 类型 function | object, 动画运行过程callback
```
# if endMethod is function
let end = endMethod;
# if endMethod is object
start = endCallback.start; // 动画class添加到dom之前
active = endCallback.active; //动画class添加到dom之后
end = endCallback.end; // 动画运行结束class从dom移除之后
```