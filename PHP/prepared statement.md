# Prepared Statement
SQL 內提供字串塞值的方式來下 CMD ，避免發生 [[SQL Injection]]

首先，先將我們的 query 指令需要塞值的地方轉換成 " ? "
ex. 
\$sql_cmd = "SELECT password FROM users WHERE username = ?";
\$sql_cmd = "INSERT INTO comments(author, article) VALUES ( ?, ? )";

接下來呼叫 prepare()
\$stmt = \$conn->\$prepare(\$sql_cmd);


然後把資料 bind 起來，bind_param()
\$stmt->bind_param('ss', \$username, \$content)

這邊的第一個參數可以放
s：代表 string
i：代表 int


然後在執行 execute()
\$result = \$stmt->execute()
如果有資料 $result 就會有東西


但如果要撈取資料就必須要再執行 \$result = \$stmt->get_result() 
接下來一樣就是 \$row = \$result->fetch_aoooc()
就可以拿取資料了。

#PHP 
#MySQL 
#hack 
