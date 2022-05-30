# Array.sort()
陣列做排序，*會改變原有的陣列*

預設是照字串做排序，而非數字做排序
```js
var arr = [10, 3, 42, 28];
arr.sort();
console.log(arr);

//  [ 10, 28, 3, 42 ]
```
如果要照數字排序，可以在參數放入比較的 function。

ex.數字由小排到大:
```js
var arr = [10, 3, 42, 28];
arr.sort(function(a, b) {
	if(a === b) return 0;
	if(b > a) return -1;
	return 1;
});
console.log(arr);

//  [ 3, 10, 28, 42 ]
```

Array.sort() 會依序把陣列的每個值放進來做比較，第一個值先放 a ，第二個值放 b，如果 b > a 就不調換順序，反之，如果 a > b 就調換順序。

預設調換順序是 return 1
不調換順序是 return -1
相同是return 0

延伸...
如果由小排到大，則 b 都會大於 a，如果 a > b 就要對調。
所以如果 a-b > 0 就對調
```js
var arr = [10, 3, 42, 28];
arr.sort(function(a, b) {
	return a-b;
})
console.log(arr);

//  [ 3, 10, 28, 42 ]
```

相反的，如果要由大排到小的話，就是 a 都要大於 b，如果 b > a 就要對調。
所以 b - a > 0 就對調 
```js
var arr = [10, 3, 42, 28];
arr.sort(function(a, b) {
	return b-a;
})
console.log(arr);

//  [ 42, 28, 10, 3 ]
```


#內建函式
#array 