# Arrow Function
在 [[ES6]] 新增了一個宣告 function 的方式，就是用 Arrow Function 來宣告
實例如下...
```js
function add(n) {
	return n + 1;
}

//可以變成
const add function (n) {
	return n + 1;
}

//Arrow Function
const add = (n) =>{
	return n + 1;
}

//如果參數只有一個，也可以省略參數旁邊的小括弧
const add = n => {
	return n + 1;
}

//若是只有 return 的部分，還可以在簡化成
const add = n => n + 1;
```

所以如果要連續使用 function 的話，可以這樣使用
```js
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(
	arr
	.filter(n => n > 4)
	.map(n => n * 2)
)

// [10, 12, 14]
```

這樣的方式也可以稱作是一種 [[Syntax Surger 語法糖]]