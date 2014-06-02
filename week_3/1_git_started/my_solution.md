## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<!-- Your defnition here -->
	git add * 
	This adds changes all files/folders in the current repository to the staging area of the git software/application so that they can be committed.
#### branch
<!-- Your defbranch nition here -->
	git branch *
	git checkout [branch_name]
	Use to see all branches that have been created. Branches are parallel versions of your code that you can work on until you create a branch that you want to go down and marge it with your trunk. 
#### checkout
<!-- Your defnition here -->
	git checkout [option_name] [branch_name]
	Moves you between branches.  

#### clone
<!-- Your defnition here -->
	If you need to collaborate with someone on a project, or if you want to get a copy of a project so you can look at or use the code, you will clone it. You simply run the git clone [url] command with the URL of the project you want to copy.

EXAMPLE: $ git clone git://github.com/schacon/simplegit.git
	

#### commit
<!-- Your defnition here -->
Now that you have staged the content you want to snapshot with the git add command, you run git commit to actually record the snapshot. Git records your name and email address with every commit you make, so the first step is to tell Git what these are.
EXAMPLE: $ git commit -m 'my hola mundo changes'

#### fetch
<!-- Your defnition here -->
git fetch will synchronize you with another repo, pulling down any data that you do not have locally and giving you bookmarks to where each branch on that remote was when you synchronized. These are called "remote branches" and are identical to local branches except that Git will not allow you to check them out - however, you can merge from them, diff them to other branches, run history logs on them, etc. You do all of that stuff locally after you synchronize.

#### log
<!-- Your defnition here -->
Git provides a tool that shows you all the commit messages that have lead up to the snapshot you are currently on, which is called git log.

#### merge
<!-- Your defnition here -->
Once you have work isolated in a branch, you will eventually want to incorporate it into your main branch. You can merge any branch into your current branch with the git merge command. Let's take as a simple example the 'removals' branch from above. If we create a branch and remove files in it and commit our removals to that branch, it is isolated from our main ('master', in this case) branch. To include those deletions in your 'master' branch, you can just merge in the 'removals' branch.

#### pull
<!-- Your defnition here -->
This command will basically run a git fetch immediately followed by a git merge of the branch on that remote that is tracked by whatever branch you are currently in. Running the fetch and merge commands separately involves less magic and less problems, but if you like the idea of pull, you can read about it in more detail in the official docs.

#### push
<!-- Your defnition here -->
To share the cool commits you've done with others, you need to push your changes to the remote repository. To do this, you run git push [alias] [branch] which will attempt to make your [branch] the new [branch] on the [alias] remote. Let's try it by initially pushing our 'master' branch to the new 'github' remote we created earlier.
EXAMPLE: $ git push github master

#### reset
<!-- Your defnition here -->
git reset is probably the most confusing command written by humans, but it can be very useful once you get the hang of it. There are three specific invocations of it that are generally helpful.

USE 1: git reset HEAD unstage files from index and reset pointer to HEAD

USE 2: git reset --soft moves HEAD to specified commit reference, index and staging are untouched

USE 3: git reset --hard unstage files AND undo any changes in the working directory since last commit

#### rm
<!-- Your defnition here -->
git rm will remove entries from the staging area. This is a bit different from git reset HEAD which "unstages" files. To "unstage" means it reverts the staging area to what was there before we started modifying things. git rm on the other hand just kicks the file off the stage entirely, so that it's not included in the next commit snapshot, thereby effectively deleting it.

#### status
As you saw in the git add section, in order to see what the status of your staging area is compared to the code in your working directory, you can run the git status command. Using the -s option will give you short output. Without that flag, the git status command will give you more context and hints. Here is the same status output with and without the -s. The short output looks like this:

EXAMPLE: $ git status -s


## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

## Release 6: Reflection
Great review of Git. I've been using command line for Git for some time now given I'm using a Linux machine but I learned a lot from this exercise.
