# Function 的參數
function 參數名稱 (參數){

}

這裡的參數除了一般的資料型態之外，也可以傳 function 進去
ex.  將陣列內容都 x2 再轉出
```js
function transform (arr, transformFunction) {
	var result = [];
	for(i = 0; i < arr.length; i++) {
		result.push(transformFunction(arr[i]))
	}
	return result;
}

function double(n) {
	return n*2;
}

console.log(transform([1,2,3], double));

// [2,4,6]
```
這邊就是把 double 這個函式當成參數傳到 transform 裡面

#callback

也可以將 double 用[[匿名函式 (anonymous function)]]的方式來寫：
```js
function transform (arr, transformFunction) {
	var result = [];
	for(i = 0; i < arr.length; i++) {
		result.push(transformFunction(arr[i]))
	}
	return result;
}

//  function double(n) {
// 	  return n*2;
//  }

console.log(transform([1,2,3], function(n) {
	return n*2;
}));

// [2, 4, 6]
```

#function 
