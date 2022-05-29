# while
while 和 [[do while]] 的差別在於 do while 會先執行一次，再判斷是否滿足 while() 內的條件。
而 while 事先判斷是否滿足 while()內的條件再執行裡面的迴圈。
```js

var i = 0 ;

while(i <= 100) {
	console.log(i++);
}

console.log("i = ", i);

// 0,1,2,3,.....,100
// 101
```
#迴圈 
#while