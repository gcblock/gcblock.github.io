cd docs/.vuepress/dist
git init
git add .
git commit -m "first commit"
git branch -M dep
git remote add origin https://github.com/gcblock/doc.git
git push origin :dep
git push -u origin dep
cd ../../../

