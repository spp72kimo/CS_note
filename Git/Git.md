# Git使用方式
1. 初始化 : git init
2. 查看版本控制狀態 : git status
3. 加入版本控制 : git add
4. 資料夾內所有檔案加入版本控制 : git add .
5. 移除某檔案的版本控制 : git rm --cached  filename
6. 建立一個新版本 : git commit -m "message"
7. 加入版控並且建立新的版本控制 : git commit -am "message"
	1. 是 git add + git commit -m 的綜合
8. 查詢commit版本紀錄 : git log
	1. 精簡版的 : git log --oneline
9. 回到之前的版本 : git checkout 版本編碼
10. 回到最新的版本 : git checkout master
11. 不需要加進版控的檔案可以把檔名寫在 :  .gitignore
12. 查詢 commit 之前檔案內容的更改狀況 : git diff


## [[Git狀況劇]]
#Git 

--- 
## [[Branch]]
**git branch -v**
	查詢目前現有的branch
**git branch 分支名稱**
	建立新的Branch
**git brnanch -d  分支名稱**
	刪除分支
**git checkout  分支名稱**
	切換分支
	
#GitBranch 
___ 
## Merge 合併分支
**git merge 分支名稱**
	合併分支，將其他分支合併進來

#### merge conflict 合併發生衝突
如果發生合併衝突，可以 *git status* 查看發生衝突的檔案，然後再進去檔案裡面決定要保留或是刪除哪一個版本，最後再 *commit*  一次就好。


**遠端參考這篇[[GitHub]]**


#GitMerge