# Immutable 不可變
在 Js 中，只要是 primitive 的型態都是不可變的 (immutable)。
而 object 和 array 是可變的 (mutable)

ex. 將小寫轉換成大寫
```js
function transToUpper (char) {
	code = char.charCodeAt()
	return String.fromCharCode(code-32);
}

var char = "f";
var Char = transToUpper(char);
console.log(Char);
```

在 function 裡面的變數怎麼樣都無法修改或存回到外面的變數，所以外面一定要有變數去接 function 裡面處理好的結果。

但是因為 object 和 array 是在變數裡存放記憶體的位置，所以 function 裡面可以直接更改外面變數的值。
所以 function  外面可以不用宣告變數去接 function 處理好的結果。

#新手要注意 
#immutable
#mutable 