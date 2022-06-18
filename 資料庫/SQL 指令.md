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

#MySQL
#command