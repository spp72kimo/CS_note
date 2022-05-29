# if else 判斷式
Js 裡面的 if else  判斷式有這幾種...
```js
var age = 36;

if(age >= 60) {
	console.log("Old");
} else {
	if(age >= 20) {
		console.log("Young");
	} else {
		console.log("Children");
	}
}

// Young
```

也可以把 else if 寫在同一行：
```js
var age = 36;

if (age >= 60) {
	console.log("Old");
} else if (age >=20) {
	console.log("Young");
} else {
	console.log("Children");
}

//  Young
```

若是只有寫 if 而沒有寫 else 的話，則所有的 if 都會判斷：
```js
var age = 36;

if (age >= 60) {
	console.log("Old");
}

if (age >= 20) {
	console.log("Young");
}

//  Old
//  Young
```

#判斷式
#ifElse
