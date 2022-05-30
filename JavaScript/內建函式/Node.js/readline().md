# readline()
主要是可以讀取明令列我們所輸入的字串，再把這些字串拿來做各種處理。

使用方式：
```js
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("你的名字：", function(name){
	console.log("你好，" + name);
	rl.close();
})

rl.on("close", function() {
	process.exit(0);
});
```
結尾一定要執行 process.exit(0) ，因為一旦開啟 readline.createInterface() 之後就會依直開著了。


### rl.question("提示字串" , 處理函式)
將輸入的字串傳進函式做處理


### rl.on("line", 處理函式)
將每行字串讀入到函式做處理
ex.
```js
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	input = line.trim();
	switch(input){
		case "A":
		console.log("Hi~");
		break;
		case "B":
		console.log("How are you?");
		break;
		case "88":
		console.log("bye bye ~~");
		rl.close();
		break;
		default:
		console.log("no command to run.")
	}
	
	rl.on("close", function() {
		process.exit(0);
	})
	
})
```

#輸入輸出
#input
#stdin 
