cd docs/.vuepress/dist
git init
git add .
git commit -m "更新"
git remote add origin https://github.com/gcblock/doc.git
git checkout -b main origin/main
git push -u origin main

cd ../../../

