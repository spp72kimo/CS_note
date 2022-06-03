# 實作 Array.filter()
剛剛在課堂上要實作 Array.filter() 的內建函式，實在是有點生澀，
這邊再做一下筆記來加強一下自己的記憶。

```js
function filter(arr, callback) {
	let solved = [];
	for(let i=0; i<arr.length; i++) {
		if(callback(arr[i])) {
			solved.push(arr[i]);
		}
	}
	return solved;
}


function main() {
	//  預設陣列
	let arr = [1,2,3,4,3,2,5,3];
	let target = 3;
	let solved = [];
	
	//  陣列內如果大於 3 就輸出
	solved = filter(arr, function(element) {
		return  element > 3
	})

	console.log(solved);
}

main();
```

#### 重點筆記：
Array. filter() 是判斷是否符合條件，如果符合條件就輸出，
所以重點是要讓 filter() 去處理 true or false ，如果是 true，
就加入新陣列，最後再把處理後的陣列回傳回去。