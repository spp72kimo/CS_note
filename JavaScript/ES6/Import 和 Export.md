# Import 和 Export
屬於 [[ES6]] 的新的引入 module 的方式，
以往我們在引入 module 是使用 module.exports 和 require，可以參考 [[輸入和輸出 module]]
而在 ES6 的新的方式是使用 **export** 和 **import from**

module 檔案 (utils.js)
```js
export function sayHi(name) {
	console.log(`Hello, ${name}.`);
}

export const NAME = "Jason";

// 也可以使用這樣的方式
export {sayHi, NAME};
```

引入 module
```js
import {sayHi, NAME} from "./utils.js";

sayHi("Steven");
// Hello, Steven.
console.log(NAME)
// Jason
```

## export default
使用 export default 的方式的話，在引入的檔案就不用再寫大括號，也不用指定原本 function 的名稱，就是代表預設要 export 的東西，所以在引入檔案裡就不用特別在寫該函式或是變數的名稱了。
ex.
```js
function sayHi(name="") {
	console.log("Good morning, " + name);
}

export const NAME = "Jason";

export default sayHi;
```
這邊可以在宣告函式之後再 export default function name 就好，不用把 export default 寫在宣告函式前面。*除了 export default 之外，其他都要再宣告前就要寫 export。*


```js
import say,{NAME} from "./utils.js";

say("steven");
// Good morning, steven

console.log(NAME);
// Jason

```
上面是用 say 來接引入的 sayHi ，所以名稱可以不用相同，但是因為 NAME 不是預設的 export ，所以還是要用大括號來接，並且名稱要相同。

也可以用 * 來引入所有的函式，並且用 as 來取別名
```js
import * as utils from "./utils.js";

utils.sayHi("steven");
// Good morning, steven

console.log(utils.NAME);
// Jason
```

同理也可以用 as 來放在 module 的檔案裡，來幫輸出的函式取別名
```js
function sayHi() {
	console.log("Hello!");
}

const NAME = "Jason";

export {sayHi as say, NAME}
```

引入的檔案
```js
import {say, NAME} from "./utils.js";

say();
// Hello

console.log(NAME);
// Jason
```

同理，也可以在引入的檔案裡把函式用 as 給別名...
```js
import {say as sss, NAME} from "./utils.js";

sss();
// Hello

console.log(NAME);
// Jason
```