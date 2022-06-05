# template literals
在 [[ES6]] 裡，新增了這個功能 樣板文字...

ex.
```js
let name = "Steven";
function sayHi(name) {
	console.log(`Good moroning, ${name}`);
}

// Good morning, Steven

str = `
Hi, my name is Jason.
How are you?
`

console.log(str);

// 
//Hi, my name is Jason.
//How are you?

//也可以自動換行，不需要另外加 \n
```