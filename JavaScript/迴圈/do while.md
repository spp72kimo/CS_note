# do while
Js 會先做一遍 do 區塊裡面的程式，然後在判斷 while() 裡面的條件是否為 true，如果是 true 的話，就繼續執行 do 區塊的程式，直到 while() 裡面的判斷為 false 才會跳出迴圈。
```js
var i = 0;

do {
	console.log(i);
	i++;
} while(i <= 100)

console.log("i = ", i);

// 0,1,2,3,4,5,......,100
// i = 101
```

也可以把條件寫在 do 區塊裡面：
```js
var i = 0;

do {
	console.log(i);
	i++;
	if( i > 100) {
		break;
	}
} while(true)

console.log("i = ", i);

// 0,1,2,3,4,.....,100
// i = 101su
```
裡面的 **break** 是跳出迴圈的意思，若 i > 100 則跳出迴圈。

若是只要印出偶數，可以這樣寫：
```js
var i = 0;

do{
	i++;
	if(i & 1 === 1 ) {
		continue;
	}
	console.log(i);
	
}while (i <= 100)

console.log("i = ", i);

// 2,4,6,8,10,.....,100
// i = 101
```
裡面的 **continue** 是跳過這次的迴圈，繼續執行下一次的迴圈。
判斷偶數的方法可以參考 #判斷奇偶數

#迴圈
#break
#continue