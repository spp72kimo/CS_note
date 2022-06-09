# process.argv
是一個陣列的型態，當我們在 CLI 輸入指令時，這些指令就會分別被拆解並且存在 process.argv 當中

在使用之前必須先引入近來。

```js
const process = require("process");
console.log(process.argv);
```

如果在指令列輸入 `node index.js 2`
process.argv 就會如下
```js
[
	'node',
	'index',
	'2'
]
```

#內建函式