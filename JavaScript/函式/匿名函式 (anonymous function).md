# 匿名函式 (anonymous function)
如果只要執行一次，其他地方都不會去呼叫這個函式的話，就可以用匿名函式的方式來宣告。
ex. 將指定陣列內容都 x2
```js
var arrNumber = [1, 2, 3];
console.log(function(arr) {
	var result = [];
	for(i = 0; i < arr.length; i++) {
		result.push(arr[i] * 2);
	}
	return result;
}(arrNumber));

// [2, 4, 6]
```
**注意：後面必須加上()並且放進引數，否則 function 不會執行**

引數的定義可以參考這篇[[參數和引數]]

#function 

