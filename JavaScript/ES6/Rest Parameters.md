# Rest Parameters
在 [[ES6]] 新增的功能，其實是 [[Spread Operator]] (...)功能的延伸
舉例來說..
```js
let arr = [1, 2, 3, 4, 5, 6];
let [one, two, ...rest] = arr;

console.log(rest);
//  [3, 4, 5, 6]
```
可以說是把剩下沒有解構的內容都集合在 rest 裡面了。

同樣的方式也可以應用在 Object 裡面
```js
let obj = {
	a: 1, 
	b: 2, 
	c: 3,
	d: 4
}

let {a, b, ...rest} = obj;

console.log(rest);
//  { c: 3, d: 4 }
```

可以把這樣的方式應用在 function 參數的傳遞
```js
function add(...args) {
	let sum = 0;
	for( let i=0; i<args.length; i++) {
		sum += args[i]
	}
	return sum;
}

console.log(add(1, 2, 3, 4, 5, 6 ));
// 21
```