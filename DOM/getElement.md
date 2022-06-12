# getElement
在 DOM 裡有個各種獲取網頁元素 (HTML Tag) 的方式，
因為是 DOM 的 library，所以在使用前都要加上 document


### getElementsByTagName()
用 html tag 來取得元素，用類似陣列的方式回傳 (html collection)
```js
document.getElementsByTagName('div');
```



### getElementsByClassName()
用 css 的 class name 來取得元素，用類似陣列的方式回傳 (html collection)
```js
document.getElementsByClassName('post__data');
```



### getElementById()
用 css 的 ID 來取得元素，注意這邊的 Element 沒有加 s
```js
document.getElementById('id');
```




### querySelector( 加入css selector )
用 css selector 的方式來選擇元素，但只會回傳單一元素 (第一個找到的)
```js
document.querySelector("#id");
document.querySelector(".post__data");
document.querySelector("div p span");
```




### querySelectorAll( 加入css selector )
和上面相同，但回傳所有符合的元素，用 NodeList 回傳
```js
document.querySelectorAll('div');
```


**ps.** 
NodeList 和 html collection 都是 array-like Object，
- 都有 length 的屬性 
- 都可以用索引值取得元素


#DOM 