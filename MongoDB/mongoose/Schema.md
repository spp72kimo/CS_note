# Schema

* 建立資料庫內 model (表格) 的格式，也可以驗證格式是否正確
 --- 
* **Instance methods**
	1. 建立屬於 Schema 自己的 function，之後find 出來的 data 都有內建這個 function
	2. 需要 new schema之後才有的 function
*  **Statics methods**
	1. 建立屬於 model 的 function，
	2. 不需要 new schema，就可以使用，但是這個是async或是promise的function，之後呼叫的話要用.then().catch()
--- 
 * **Middleware**
	1. `schema.pre("save",()=>{})` 
		- 設定在 schema 執行 save '前'要跑的 function
	2. `schema.post("save",()=>{})`
		 - 設定在 schema 執行 save '後'要跑的 function

#mongoose
#mongoDB
#schema