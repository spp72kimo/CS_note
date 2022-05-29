# return
當我們需要存取 function 處理好的資料時，就要用 return 把 function 處理好的資料回傳出來。
相反的，如果不需要存取  function  處理好的結果，就可以不用回傳。

沒有 return 的例子：
```js
function sayHi(name) {
	console.log("Hello, " + name);
}

function main() {
	sayHi("Steven");
}

main();
```

有 retuen 的例子：
```js
function double(n) {
	return n*2;
}

var result = double(3);
console.log(result);

// 6
```
因為必須要知道處理後的結果，所以把結果 return 出來。