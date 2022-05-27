## Git 狀況劇

### 如果之前的 commit message 打錯的話
**git commit --amend**
- 如果之前的 commit message 打錯，修改之前打錯的 message

---
### 如果已經不小心 commit，但想回到之前commit的狀態
**git reset HEAD^**
+ --hard
	+ 完全回到上一次沒有更改過的狀態
- --soft ( 預設 )
	- 回到修改檔案後，還沒有 commit 之前的狀態
-  ^ 代表上一次的commit

---
### 已經修改檔案但還沒 commit ，想要回到檔案之前的狀態

**git checkout -- 檔案名稱**
- 將特定的檔案返回到commit之前的狀態
- 若改成 `.` ，代表把所有的檔案回復到上一次 commit 的狀態

---
### branch 的名稱打錯了!
**git branch -m  `新的branch名稱`
- 修改 branch 名稱

---

## 想要抓取遠端的 branch
**git checkout `分支名稱`**
- 只要把遠端的 repostory clone 下來之後，用 *check out 分支名稱*  就可以跳到另一個分支了。
- 預設 git branch -v 是看不到遠端的分支名稱的，必須從 gitHub 上面找，確定名稱之後再 *git checkout 分支名稱* 過去就可以了。

#Git 
#gitReset
#gitCheckout
#GitBranch 
#gitCommit

