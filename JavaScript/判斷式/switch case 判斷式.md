# switch case 判斷式
```
var month = 3;

switch(month) {
	case 1:
		console.log("一月");
		break;
	case 2:
		console.log("二月");
		break;
	case 3:
		console.log("三月");
		break;
	case 4:
		console.log("四月");
		break;
	case 5:
		console.log("五月");
		break;
	case 6:
		console.log("六月");
		break;
	default:
		console.log("沒有此月份");
}

//  三月
```

這種轉換月份的方式也可以用陣列的性質來做：
```
var month = 3;

var trans = ["一月", "二月", "三月", "四月", "五月", "六月"];

console.log(trans[month - 1]);

//  三月
```

#判斷式 
#switchCase
