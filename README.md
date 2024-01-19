# gittutorial

[Step 1:](https://cli.github.com/manual/gh_repo_create) 

	gh repo create [<name>] [flags]

		To create a remote repository non-interactively, supply the repository name and one of --public, --private, or --internal. Pass --clone to clone the new repository locally.


## Create a New Repository

```
echo "# gittutorial" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:WeiJian123-tech/gittutorial.git
git push -u origin main
```

## Push an existing repository

```
git remote add origin git@github.com:WeiJian123-tech/gittutorial.git
git branch -M main
git push -u origin main
```
