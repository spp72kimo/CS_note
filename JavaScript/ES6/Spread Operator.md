# Spread Operator
在 [[ES6]] 新增的功能，可以用來展開陣列和物件的內容。
ex.
```js
let arr [1, 2, 3];
let arr1 = [...arr, 4, 5, 6];
console.log(arr1);

//[1, 2, 3, 4, 5, 6]
```
所以 ...arr 可以放在 arr1 的任何一個位置
```js
let arr [1, 2, 3];
let arr1 = [4, ...arr, 5, 6];
console.log(arr1);

//[4, 1, 2, 3, 5, 6]
```

相同的方式也可以用在 Object 上面
```js
let obj = {
	a: 1,
	b: 2
}

let obj1 = {
	...obj,
	c: 3
}

console.log(obj1);

// { a:1, b:2, c:3}
```


因為是把內容拆開來賦值，所以並不會 copy 到記憶體的位置，另一種說法，就是可以複製陣列和物件。
```js
let arr = [1, 2, 3];
let arr1 = [...arr];

console.log( arr === arr1 );
// false
```

```js
let obj = {
	a: 1,
	b: 2
};

let obj1 = {...obj};
console.log( obj === obj1);
// false
```