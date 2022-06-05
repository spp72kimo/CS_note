# let , const
在 [[ES6]] 新增了 let 和 const 這兩個宣告變數的方式，這兩個和原本的 var 之間有甚麼不同呢？

## const 
是宣告常數的，所以從宣告初始值之後就無法再作任何更動。

## let 
宣告變數，但是其作用域 (scope) 是在大括號 {} 裡面，在括號外就無法做存取。
```js
function compare(arr) {
	let min = -Infinty;
	for(let i=0; i<arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i];
		}
	}

	//在這邊是無存取 i 的
}
```

## var
宣告變數，但是其作用域 (scope) 是以 function 做區分。
```js
function test() {
	for(var i=1; i<10; i++) {
		console.log(i);
	}
	console.log(i)
}
```

上面的程式，在 for 回圈外面的 i 是可以被讀到的，因為是用 var 做宣告。
如果是用 let 做宣告，外面的 i 就會變成 undefined.