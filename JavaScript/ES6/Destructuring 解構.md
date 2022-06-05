# Destructuring 解構
在新的 [[ES6]] 新增了 destructuring ，以往我們從陣列和物件內要提取值的時候，都要重複命名
es.
```js
let arr = [1,2,3];
let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one, two, three);
// 1 2 3
```

現在透過 destructuring 的方式可以這樣用..
```js
let arr = [1,2,3];
let [one, two, three] = arr;
console.log(one, two, three);

// 1 2 3
```

Object 的型態也可以用解構的方式
```js
let obj = {
	name: "Steven",
	sex: "male",
	age: "38"
}

let {name, sex, age} = obj;
console.log(name, sex, age);

// Steven male 38
```