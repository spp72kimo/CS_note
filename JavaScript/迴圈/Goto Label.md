# Goto Label
迴圈的概念如下：
ps.**在其他的程式語言有這種語法，但在 JS 沒有**
```js
var i = 0 ;

loop:
	console.log(i);
	i++;
if(i <= 100) {
	goto loop;
}

console.log("i = ", i)

//  0,1,2,3,4,5......,100
//  i = 101
```

用另外的 [[do while]] 來跑這個範例；
用另外的 [[while]] 來跑這個範例；
用另外的 [[for loop]] 來跑這個範例；
#迴圈