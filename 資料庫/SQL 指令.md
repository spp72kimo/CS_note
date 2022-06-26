# MySQL 指令
## 查詢 SELECT
SELECT  "欄位名稱"  FROM  "表單"  WHERE  "搜尋條件"
`SELECT id FROM users WHERE id=2`

**ORDER BY "欄位名稱"  DESC**
降冪排序

**ORDER BY "欄位名稱"  ASC**
升冪排序


## 新增 INSERT INTO
INSERT INTO  "表單"(欄位名稱 1, 欄位名稱 2)  VALUES  ("資料內容 1", "資料內容 2")
`INSERT INTO users(username, email) VALUES ("Steven",  "abc@gmail.com")`


## 修改 Update
UPDATE  "表單"  SET  欄位名稱 1 = "資料內容1", 欄位名稱 2 = "資料內容2"  WHERE  "符合條件"
`UPDATE users SET username = "Jason", email="def@yahoo.com.tw" WHERE id=2`


## 刪除 DELETE
DELETE FROM  "表單"  WHERE  "滿足條件"
`DELETE FROM users WHERE id=2`


## 查詢關聯資料表 join
比較常使用的是 join left
SELECT "欄位" FROM "表單1" LEFT JOIN "表單2" ON  表單1.欄位1 = 表單2.欄位2
`SELECT * FROM comments LEFT JOIN users ON comments.username = users.username `

其他的 JOIN 語法可以參考：[# Visual JOIN](https://joins.spathon.com/)

## LIMIT
- LIMIT：列出前幾筆資料
- OFFSET：從第幾筆資料開始列印 ( 一定要搭配 LIMIT)
`SELECT * FROM comments LIMIT 10 OFFSET 3`
從第三筆資料開始列印出前 10 筆資料

## COUNT('欄位')
計算有幾筆資料，可搭配 AS 使用

#MySQL
#command