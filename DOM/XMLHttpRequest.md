# XMLHttpRequest
每個瀏覽器都有內建 XMLHttpRequest 的 function ，我們可以透過這個 function 向 server 發送 request ， server 回傳的 response 雖然會經過瀏覽器，但是瀏覽器不會做任何的解析，而是將 response 下傳到 JavaScript 來讓我們做處理。

使用範例：
```js
const request = new XMLHttpRequest();

request.onload = function() {
	if(request.status >=200 && request.status < 400) {
		console.log(request.responseText)
	} else {
		console.log('error')
	}	
}

request.onerror = function() {
	console.log('err')
}

request.open('GET', 'https://reqres.in/api/users', true);
request.send();
```

### resquest.onload 
等同於`request.addEventListener('load', function(){})` 的意思。

### request.onerror 
等同於 `request.addEventListerer('error', function(){})`  的意思。

### resquest.open() 
來設置 request 的 method 和 url，第三個參數預設為 true (async)


### request.setRequestHeader()
如果要進行 post 來傳遞資料時，都要先在標頭宣告是用甚麼形式來傳遞資料， server 那邊才能夠辨識。
```js
request.setRequestHeader(

        "Content-type",

        "application/x-www-form-urlencoded"

      );
```
#headers 


#DOM 
#request
