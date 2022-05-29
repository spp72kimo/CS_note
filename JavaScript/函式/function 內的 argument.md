# function 內的 argument
Js 裡面有內定一個型態可以查看 function 內傳進去的引數 ([[參數和引數]])
```js
function add (a, b) {
	console.log(arguments);

	return a + b;
}

console.log(add(2, 3));

// [Arguments] { '0': 2, '1': 3 }
// 5
```
由上面 console.log() 顯示出來，可以看出 arguments 是一個物件
其實準確地說，是一個類陣列的物件 (array-like)
所以也可以用 arguments.length() 來查看陣列的長度，藉此判定有幾個參數。
關於 .length 可以參考[[Array 陣列]]
