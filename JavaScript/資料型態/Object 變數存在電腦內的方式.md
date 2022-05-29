# Object 變數存在記憶體內的方式
當我們在 Js 裡面宣告 Object 型態變數時，電腦並不會在變數裡面存放 Object 的值，而是在裡面存放 Object 的記憶體位置。

所以當我們在存取 Object 變數的時候，Js 會先去看這個變數內所存放的 Object 的記憶體位置，再到那個位置讀取 Object 的值。

所以如果我們做以下的操作：
```js
var student = {
	name: "Steven",
	phone: "0947736272"
};

var a = student;

a.name = "Jason";
console.log(student.name);  // Jason 
console.log(student === a);   // true
```
在這裡的 變數 student 和 a 因為裡面都是存放相同的記憶體位置，所以如果更改裡面 Object 的值，其實是改到相同的 Object。而因為都是存放相同的記憶體位置，所以 === 是 true。

#object
