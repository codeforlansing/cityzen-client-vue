# Code for Lansing Contributing Guide

Hi! We're really excited that you are interested in contributing to our tech
community tools. Before submitting your contribution, please make sure to read
through these guidelines.

- [Code of Conduct](https://github.com/codeforlansing/project-template/blob/master/.github/CODE_OF_CONDUCT.md)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)

## Issue Reporting Guidelines

- If you would like to report a bug, choose "Bug report" when creating a new
  issue in this project, then fill in all of the details to the best of your
  abilities.

- If you would like to request a new feature, choose "Feature request" when
  creating a new issue in this project. Provide as many details as possible,
  including visual mockups of the feature, descriptions of new user
  interactions, and an explanation of the benefits of the feature.

## Pull Request Guidelines

- The `master` branch is a snapshot of the latest in-flight release. All
  development should be done in dedicated branches.

- Checkout a development branch from the `master` branch. Similarly, submit pull
  requests back to the `master` branch.

- Add your name (and optional email and website) to the `contributors` property
  in `package.json`. We want people to know you're helping out!

- If adding a new feature, first create an issue by following the instructions
  in the [Issue Reporting Guidelines](#issue-reporting-guidelines).
  Provide convincing reason to add this feature, provide mockups, and ask for
  discussion about the feature from other contributors. Wait until at least one
  administrator has greenlighted the feature before working on it.

- If fixing a bug:
  - Add `(fixes #xxxx)` (where #xxxx is the issue id) to the title of your pull
    request. For example, `adjust margins on ultrawide screens (fixes #12)`.
  - Provide a detailed description of the bug in the description of the pull
    request.

- Assign one or more reviewers to the pull request. At least one reviewer must
  approve the changes before the pull request can be merged.

## Development Setup

If you want to run this project and make changes to it on your computer, some
initial setup is recommended.

This section starts with the basics like git and even the recommended editor.
There may be useful information here even if you're already familiar with
using git, VS Code, and Node. If you want to jump ahead, though, please read how
to [customize your environment](#customizing-your-environment).

You'll run all of the commands provided in this guide in a terminal program
(Terminal, Git Bash, etc.).

### Required software

If you're comfortable with using git, a terminal, node (npm), and VS Code,
here's a quick list of the tools you'll need to run this project:

- [git](https://git-scm.com/downloads)
- [node and npm](https://nodejs.org/), although
  [nvm](https://github.com/nvm-sh/nvm) is recommended for non-Windows users
- [Visual Studio Code](https://code.visualstudio.com/)

### Getting the source code

If you want to modify a project and you are not a member of the Code for Lansing
organization, click the _Fork_ button in the top right of the project page on
GitHub. This will create your own copy of the code, allow you to get updates
from us, and make it easier to send us helpful improvements that you've made.

To get the code from GitHub, you will need to install
[`git`](https://git-scm.com/downloads) on your computer and then use `git clone`
to download the project to your computer.

The full `git clone` command will vary depending on the name of the GitHub
project in which you are working. Replace `project-template` in the following
command with the correct name of the project you wish to change:

``` sh
git clone https://github.com/codeforlansing/project-template.git
```

If you forked this repository, the command will be different. Go to the page
where your copy of the code exists on GitHub and then click the _Clone or
download_ button to get the URL of the repository. Then run the following
command, substituting `REPOSITORY_URL` with the URL shown when you clicked the
_Clone or download_ button on your repository:

``` sh
git clone REPOSITORY_URL
```

### Installing NodeJS

Node is a popular tool that will be used in many Code for Lansing projects. You
can learn more about it at [NodeJS.org](https://nodejs.org/).

If you are a Windows user, go to the NodeJS website to download and install Node
_LTS_ (long term support).

If you use macOS or Linux, we recommend using
[`nvm`](https://github.com/nvm-sh/nvm) to install Node. Once `nvm` is installed,
you can installed, you can run the following command to install the correct Node
version:

``` sh
nvm install lts/dubnium
```

And then use that version of Node in your terminal by running:

``` sh
nvm use lts/dubnium
```

### Installing dependencies

With Node installed, use its companion app, `npm`, to install all of the
required packages to run the project.

In a terminal, change to the project's directory and run the following command
to install the dependencies:

``` sh
npm install
```

### Editing the code

If you want to look at the code and make changes to it, we highly recommend
using [Visual Studio Code](https://code.visualstudio.com/) (VS Code for short).
Follow the link to download and install the code editor.

After VS Code is installed, run it and click _Extensions_ from the gear icon
menu in the lower left of the editor. This will bring up a panel with a search
box.

Use the search box to find and install all of these extensions. They make the
experience of looking at and editing this project _super nice_.

- _Bracket Pair Colorizer_ by CoenraadS
- _EditorConfig for VS Code_ by EditorConfig
- _JavaScript (ES6) code snippets_ by charalampos karypidis
- _Node.js Extension Pack_ by Wade Anderson
- _npm_ by egamma
- _npm Intellisense_ by Christian Kohler
- _VSCode Essentials Snippets_ by Roberto Achar

Restart VS Code after installing all of these extensions.

### Making changes

That's it for required software! You should now be able to run the available
scripts in `package.json` file to use the project.

If you're making changes to the code and want to send a pull request to the
`codeforlansing` organization on GitHub, the easiest way is to make all of your
changes in a feature branch.

To create a feature branch, use these commands, replacing `new-branch` with the
name of your feature:

``` sh
git fetch origin
git checkout -b new-branch origin/master
```

After you've made and tested your changes, these commands are helpful for
committing your changes to your branch. Again, substitute `new-branch` with the
name of your branch and `describe your changes` with an actual description of
your changes. If you send us commits with messages that aren't descriptive then
we won't accept them.

``` sh
git add -A
git commit -m 'describe your changes'
git push origin new-branch
```

The output from this command will provide a link to GitHub that will start a
pull request. Complete the form and submit your changes. Someone will get to it
as soon as we can or you can contact a leader if you think your change may not
have been noticed.

We hope you enjoy working with our code!
