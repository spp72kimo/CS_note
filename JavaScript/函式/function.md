# function
function 函式名稱(參數) {
	函式內容
	*看是否要 return*
}

function 可以執行完指定的功能之後再回傳結果。
ex. 產生指定相對應的陣列
```js
function setArray(min, max) {
	var arr = [];
	for(i = min; i <= max; i++) {
		arr.push(i);
	}
	return arr;
}

console.log(setArray(3, 8));

// [3,4,5,6,7,8]
```
#push 

若要執行 function 必須要在後面加上 ()
可參考[[宣告函式的方式]]

#function 