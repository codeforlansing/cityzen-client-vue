# Cityzen Vue Client Contributing Guide

Hi! We're really excited that you are interested in contributing to our tech
community tools. Before submitting your contribution, please make sure to read
through these guidelines.

- [Code of Conduct](https://github.com/codeforlansing/cityzen-client-vue/blob/master/.github/CODE_OF_CONDUCT.md)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Usage and Customization](#usage-and-customization)

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

This project also uses the `cityzen-server`. In order to run this project,
we also recommend that you follow the
[Cityzen Server Contributing Guide](https://github.com/codeforlansing/cityzen-server/blob/master/.github/CONTRIBUTING.md)
and run the server.

### Getting the source code

If you want to modify a project and you are not a member of the Code for Lansing
organization, click the _Fork_ button in the top right of the project page on
GitHub. This will create your own copy of the code, allow you to get updates
from us, and make it easier to send us helpful improvements that you've made.

To get the code from GitHub, you will need to install
[`git`](https://git-scm.com/downloads) on your computer and then use `git clone`
to download the project to your computer.  If you are new to git, you might look at:
  - Jessica Lord's [git-it](https://github.com/jlord/git-it-electron) gamified learning application
  - Coursera's video course [Introduction to git and github](https://www.coursera.org/learn/introduction-git-github)
  - Flatiron School's blog post [intro to git](https://flatironschool.com/blog/an-introduction-to-git)

The full `git clone` command will vary depending on the name of the GitHub
project in which you are working. For the `cityzen-client-vue` project the full command is as follows:

``` sh
git clone https://github.com/codeforlansing/cityzen-client-vue.git
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
- _Jest_ by Orta
- _ESLint_ by Dirk Baeumer

Restart VS Code after installing all of these extensions.

### Build targets

All of the build targets for this project are `npm` scripts. You can find them
in `package.json`. To run a script, use the following command, substituting
`SCRIPT_NAME` with the name of the script you wish to run:

``` sh
npm run SCRIPT_NAME
```

Below is a summary of scripts that you can use.

#### `cityzen-server`

This script will use `bin/launch-cityzen-server.js` to run a development version
of the [`cityzen-server`](https://github.com/codeforlansing/cityzen-server)
project using `npx`.

This script can be configured using the following environment variables:

- `CITYZEN_SERVER_AUTOLAUNCH_BRANCH` - The GitHub branch to checkout and use
  when running the server. _Default: `master`_
- `CITYZEN_SERVER_AUTOLAUNCH_URL` - The location where `npx` will look for,
  download, and use the `cityzen-server` project. _Default:
  `git://github.com/codeforlansing/cityzen-server.git#${CITYZEN_SERVER_AUTOLAUNCH_BRANCH}`_
- `CITYZEN_SERVER_USE_CACHED` - Set to `false` to tell `npx` to ignore any
  cached version of `cityzen-server` that it finds, or to any other value to
  use the cached version. _Default: `true`_

#### `start`

Runs the `cityzen-server` and `serve` scripts simultaneously to make it easier
to test the client with a running development API.

#### `serve`

Use `npm run serve` to start a development server with hot reload.

Any changes you make will be automatically refreshed in the web browser and
the Vue development mode is enabled, making it easy to use the Vue Devtools
browser extension while making changes to the project.

#### `build`

Use `npm run build` to produce the production artifiacts. The generated files
will be placed in the `dist` directory.

#### `test` and `test:watch`

Use `npm run test` to run all of the unit tests for this project one time and
exit.

If you are making changes to tests and want them to run whenever you save your
changes, use `npm run test:watch`. Press `Ctrl`+`C` to stop the script when you
are done with your work.

#### `lint`

Use `npm run lint` to run ESLint and verify the code meets our code quality
expectations.

This command will also run automatically every time you run `git commit`.

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

## Usage and Customization

The client component is designed in such a way that the built artifact,
`js/volunteer-tasks.js`, can be uploaded to a CDN and used by any number of
organizations simultaneously instead of building a different artifact per
organization.

The component is also built to allow each organization using it to customize
the appearance, text shown within the component, and URLs where tasks are
fetched and submitted.

The file [public/index.html](../public/index.html) shows a complete working
example of how an organization can tailor the component to their website and
branding by using custom CSS, JSON text labels, and `data-` attributes on the
component itself.

Below is a brief explanation of each point of configuration.

### Component placement

To use the component on a page, a minimum of three HTML elements are needed:

1. The component's default styles
2. A placeholder HTML element for the component
3. The script to enable the component

#### 1. Default styles

To add the component's default styles to a page, add a `link` element right
above the `</head>` tag on the page where the component will appear.

``` html
<link href="/css/volunteer-tasks.css" rel="stylesheet">
```

#### 2. Component placeholder

To place the component at a specific location on a website, put an empty HTML
element with the `id="cfl-volunteer-tasks"` attribute at the appropriate place
in the `body` element of the page:

``` html
<div id="cfl-volunteer-tasks"></div>
```

#### 3. Component script

To activate the component, add a `style` element right above the `</body>` tag
on the page where the component will appear.

``` html
<script src="/js/volunteer-tasks.js"></script>
```

### Appearance

This component is built using as many semantic HTML elements as possible, all
nested within a single `div id="cfl-volunteer-tasks"` element.

This allows the component to inherit as many styles from the organization's
website as possible while also allowing organizations to apply additional CSS
to customize the component's appearance even further.

See [public/sample-volunteer-tasks.css](../public/sample-volunteer-tasks.css)
for an example of how to completely customize the appearance of the component.

When providing custom CSS to style the component, make sure that the custom
CSS is loaded _before_ the `volunteer-tasks.css` file introduced in Step 1
of Component Placement.

### Labels and Messages

The component uses a variety of default labels and messages that may be
overridden by an organization.

To provide one or more custom messages, add a `script` element with an
`id="cfl-cityzen-messages"` attribute to the `head` of the HTML page where the
component will be shown. Within the `script` element, provide the new values
of the labels and messages in the formation shown below:

``` html
<script id="cfl-cityzen-messages" type="application/json">
  {
    "en": {
      "submitButtonLabel": "Volunteer"
    }
  }
</script>
```

In the example above, the `submitButtonLabel` is given the value `Volunteer`,
which will make the submit button on the component show the word "Volunteer"
instead of the default "Submit".

For a complete list of labels and messages that may be customized, refer to
[src/plugins/default-messages.json](../src/plugins/default-messages.json).

### Data URLs

The locations where the component retrieves a list of volunteer tasks and
submits volunteer requests can be customized per organization.

To tell the component where to retrieve tasks, add a `data-tasks-href` attribute
to the component's placeholder element and set the value to the URL or path
where the information can be retrieved.

To tell the component where to submit volunteer requests, add a
`data-volunteer-href` attribute to the component's placeholder element and set
the value to the URL or path where the component's form information should be
sent. If the value `:id` is present in the value of this attribute, it will be
replaced with the contact method (email) of the volunteer.

Here is an example that sets both attributes:

``` html
<div
  id="cfl-volunteer-tasks"
  data-tasks-href="/api/tasks"
  data-volunteer-href="/api/users/:id/tasks/claim"
></div>
```

In this example, paths are provided, which means that the component will get and
send data using the web browser's current address and replace the path with
the appropriate value depending on whether tasks are being retrieved or a
volunteer is signing up.
