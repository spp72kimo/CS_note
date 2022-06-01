# 虛擬碼 (pseude code)
ex. 印出 1 ~ 100 之間的奇數
```js
//pseudo code

for (i from 1 to 100) do
	if ( i mod 2 === 1) then
		print i
	end if
end for
```


ex. Fizz Buzz
```js
for (i form 1 to n) do
	if (i mod 15 === 0) print "FizzBuzz"
	else if (i mod 3 === 0) print "Fizz"
	else if (i mod 5 === 0) print "Buzz"
	else print i
end for
```


ex. 在陣列裡面找最小值
```js
let min = arr[0]
for(i fron 0 to n-1) do
	if(arr[i] < min) do
		min = arr[i]
	end if
end for
```


ex. 字串反轉
```js
let str = "字串"
let result = ""
for (i form n-1 to 0) do
	result += str[i]
end for
print result
```


ex. 陣列總和
```js
let arr = []
let sum = 0
for (i from 0 to n-1) do
	sum += arr[i]
end for
print sum
```

ex.找最大值
```js
let arr = []
let max = 0
for (i from 0 to n-1) do
	if (arr[i] > max) do
		max = arr[i]
	end if
end for
print max
```