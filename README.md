# gittutorial

# [Step 1: Create a New Repostory](https://cli.github.com/manual/gh_repo_create) 

	gh repo create [<name>] [flags]

		To create a remote repository non-interactively, supply the repository name and one of --public, --private, or --internal. Pass --clone to clone the new repository locally.


# Step 2: 

## Create & Set Up a New Repository

```
echo "# gittutorial" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:WeiJian123-tech/gittutorial.git
git push -u origin main
```

## ...Or Push an existing repository

```
git remote add origin git@github.com:WeiJian123-tech/gittutorial.git
git branch -M main
git push -u origin main
```

# Step 3

## How to commit a new file to a GitHub repository with Git and SSH?

Sure, I’d be happy to help you with that! Here are the steps to commit a new file to a GitHub repository with Git and SSH:

    Create a new SSH key pair: If you haven’t already, you’ll need to create an SSH key pair on your local machine. You can do this by running the following command in your terminal:

    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
     

This will create a new SSH key using the provided email address as a label. You’ll be prompted to enter a file path to save the key, or you can press enter to accept the default location. You’ll also be prompted to enter a passphrase to secure the key.

Add the SSH key to your GitHub account: Once you’ve created the SSH key, you’ll need to add it to your GitHub account. You can do this by copying the contents of the public key file (usually located at ~/.ssh/id_rsa.pub) and adding it to your GitHub account settings.

Clone the repository using SSH: Next, you’ll need to clone the repository to your local machine using SSH. You can do this by running the following command in your terminal:

git clone git@github.com:username/repository.git
 

Replace username and repository with the appropriate values for your repository.

Create a new file: Once you’ve cloned the repository, you can create a new file using your preferred text editor.

Add the new file to the staging area: To add the new file to the staging area, run the following command in your terminal:

git add <file_name>
 

Replace <file_name> with the name of the new file.

Commit the new file: To commit the new file, run the following command in your terminal:

git commit -m "Commit message"
 

Replace "Commit message" with a brief description of the changes you made to the file.

Push the new file to the repository: Finally, to push the new file to the repository, run the following command in your terminal:

git push origin main
 

    Replace main with the name of the branch you want to push to.

That’s it! You’ve successfully committed a new file to a GitHub repository with Git and SSH.
