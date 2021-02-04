git remote add -f docs/.vuepress/dist https://github.com/gcblock/docs.git
git subtree add --prefix=docs/.vuepress/dist dist master --squash
git subtree pull --prefix=docs/.vuepress/dist https://github.com/gcblock/doc.git master --squash
git subtree push --prefix=docs/.vuepress/dist https://github.com/gcblock/doc.git master
