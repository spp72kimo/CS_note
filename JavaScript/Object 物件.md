# Object 物件
物件存取的方式有兩種：
```
var student = {
	name: "Steven",
	score: {
		english: 90,
		math: 83
	}
}

console.log(student['name'])   // "Steven"
console.log(student.name)   // "Steven"

console.log(student.score.math)  // 83
console.log(student['score']['math'])  //  83
```

但如果要用變數的 key 來存取物件，就必須用 \[ \] 才可以
```
var key = 'name';
console.log(student[key]);  // "Student"
```

#object