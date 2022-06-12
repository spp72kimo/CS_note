# 利用 Js 修改元素裡的內容
用 document.querySelector 選定元素之後再來修改

### .innerText
單純修改裡面的文字內容，無法包含任何的 HTML 標籤效果
```js
const div = document.querySelector('div');
div.innerText = "Hello!";
```


### .innerHTML
可以包含 html 的標籤效果
```js
div.innerHTML = "<h1>Hello!</h1>"
```


### .outerHTML
包含了自己本身以及內部的所有 HTML 內容，所以也可以修改自己的標籤
```js
div.outerHTML = "<span>Hello!<span>"
```


#DOM 