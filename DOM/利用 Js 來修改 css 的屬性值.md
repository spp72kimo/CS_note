# 利用 Js 來修改 css 的屬性值
DOM 裡面的 style 物件可以來存取 css 的屬性

```js
const div = document.querySelectorAll('div');
div.style.paddingTop = "10px";
div.style.color = "red";
div.style.backgroundColor = "black";


// 也可以用這樣的方式寫在一起
div.style = "background-color: black, color: red, padding-top: 10px";
```

ps. 這裡的 padding-top 要用 Js 的命名方式 paddingTop

但這種方式較少使用，會讓整個 css 變得很亂，一般會用增加 class name 的方式
這樣子修改 css 屬性的方式是 inline style，會是最高的優先權。


#DOM 