## 不要把 return 和 console.log 搞混
比較好的寫法就不要在 function 裡面寫 console.log()，因為 function 就是處理函式然後回傳結果。
ex.
```js
function add(a, b) {
	return a+b;
}

console.log(add(2,3));

//  5
```

#新手要注意