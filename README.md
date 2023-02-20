# RocketElevatorsDigitalPresence
This is the project for the first 2 weeks in Codeboxx.
----------------------------------------------------------------------------------------
GETTING STARTED WITH GIT

Give some color to the output of your code, just to make things easier to see:
git config --global color.ui true

Tell Git who is using Git:
git config --global user.name "First Last"

Tell Git the email of the user, using Git:
git config --global user.email "email@email.com"

Generate an SSH key based off your email:
ssh-keygen -t rsa -b 4096 -C "email@email.com"

View your newly generated SSH key so that you can copy it to GitHub:
cat ~/.ssh/id_rsa.pub
Let’s head over to GitHub and add our new SSH key to GitHub.  In the top right corner of GitHub, you’ll see your icon.  Click on that, and head down to Settings.  Now on the left side of the screen you should see a tab for “SSH and GPG keys”.  This will bring you to yet another page.  Click on “New SSH key”.  You can call the key whatever you’d like, and then paste in the SSH key that you got from this command: cat ~/.ssh/id_rsa.pub

Authenticate and check to see if everything works (type exactly as you see it here):
ssh -T git@github.com

We can run an ssh agent so that we can save a few steps in the future:
eval "$(ssh-agent)"
ssh-add ~/.ssh/id_rsa
----------------------------------------------------------------------------------------
Create a directory with a name of your choice:
mkdir Codeboxx

This command will essentially copy all the code in a project to your local machine:
Copy this line of code!  Bring up your terminal while making sure to be in the proper directory and type in "git clone" and paste in the SSH you just copied.  The command will look something like this:
git clone git@github.com:Codeboxx/Genesis.git

To check the directory just pulled from repo and see it belongs to which repository on GitHub:
git remote -v

remove this remote:
git remote remove origin

Grab the SSH <> Code from your GitHub repo, then paste the copied code after "git remote add origin":
git remote add origin git@github.com:yourGitName/RocketElevatorsDigitalPresence.git
----------------------------------------------------------------------------------------
There are a few Git commands that you’ll be using just about everyday:

git status

git add .

git commit -m "your message"

git push

Pushing local repo to GitHub remote, and setting the upstream to origin main branch:
git push -u origin main

sometimes "git push" doesn't work for the first time, in that case use this:
git push -u origin main --force
----------------------------------------------------------------------------------------
This will merge BRANCH_NAME into the current branch locally:
git merge BRANCH_NAME

List all local branches:
git branch

To move between branches:
git checkout (branch name)

to creat a new branch:
git checkout -b (branch name)

