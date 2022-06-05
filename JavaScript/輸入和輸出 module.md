# 輸入和輸出 module
 如果要製作一個 module 給其他檔案使用，需在輸出的檔案內加上 module.exports 
 
```js
function add(a, b) {
	return a + b; 
}

module.exports = add;
```

然後在引入檔案的開頭加上

```js
const 自訂module名稱 = require("./檔案名稱");
let ans = 自訂module名稱.add(2, 3);
consolg.lot(ans);
//  5
```

可以輸出任何形式的東西給 module.exports，另外一邊再相對應去接輸出的型態就好。

```js
function double(n) {
	return n * 2;
}

function trible(n) {
	return n * 3;
}

function filter(arr, callback) {
	let solved = [];
	for(let i=0; i<arr.length; i++) {
		if(callback(arr[i])) {
			solved.push(arr[i])
		}
	}
	return solved;
}

module.exports = {double, trible, filter};

// 也已可用另一種方式輸出，如下
exports.double = double;
exports.trible = trible;
exports.filter = filter;
// 上面也是一樣等同於物件傳出
```

```js
const myModule = require("./檔案名稱");
let arr = [1, 2, 3, 4, 5, 6];
let ans = myModule.filter(arr, function(element) {
	return element > 3
});
console.log(ans);

//[4,5,6]
```


使用 module 的好處是可以簡化重複編輯相同的 function ，到時候如果程式有問題也可以直接編輯該 module 就好，不用重複去修改。