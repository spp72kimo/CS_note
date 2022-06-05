# Default Parameters
在 [[ES6]] 中新增的功能，我們可以在 function 傳遞參數的時候，幫參數設定預設值

```js
function sayHi(name = "Steven") {
	console.log(`Good morning, ${name}.`);
}

sayHi();
//  Good morning, Steven.
```

同樣的方式也可以用在 [[Destructuring 解構]] 上面
```js
let obj = {
	name: "Steven",
	age: 38,
	sex: "male",
}

let { name, age, sex, salary = 2000 } = obj;
console.log(salary);
// 2000
```
因為 obj 裡面沒有設定 salary 的值，所以就會採用預設的 2000

同理也可以用在 array 的解構上面...
```js
let arr = [1,2];
let [ one, two, three = 3 ] = arr;
console.log(three);
// 3
```
