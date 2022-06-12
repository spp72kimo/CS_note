# 利用 Js 新增刪除元素
可以利用 DOM 裡面的 library

### createElement()
新增元素
```js
const div_parents = document.querySelector('div');
const item = document.createElement('div');
item.innerText = "This is inner div."
div_parents.appendChild(item);
```


### createTextNode()
新增純文字
```js
const div_parents = document.querySelector('div');
const item = document.createTextNode('Hello');
div_parents.appendChild(item);
```


### appendChild()
在父元素的內容後面增加新的元素，作法如前面的範例


---
### removeChild()
要移除元素前要先找到父元素才能做移除
```js
const div_parents = document.querySelector('div');
div.removeChild(document.querySelector("#son");
```
如果要刪除的元素不是再父元素裡面的話就不法成功刪除


#DOM 