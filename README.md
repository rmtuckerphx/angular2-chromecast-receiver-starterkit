# angular2-chromecast-receiver-starterkit

This project is an application skeleton for a typical [Chromecast Custom Receiver](https://developers.google.com/cast/docs/custom_receiver) written in [Angular 2](http://angular.io/) and TypeScript. You can use it to quickly create your own Receiver applications and the dev environment for these projects.

The project contains a sample Custom Receiver application and a simple Sender (see sender.html) that sends messages to and accepts messages from the Receiver.
A subset of [Bootstrap 3](http://getbootstrap.com/css/) is used for styling the application.

## Create a new project based on the Starter Kit
Clone this repo into new project folder (e.g., `my-receiver`).
```bash
$ git clone  https://github.com/rmtuckerphx/angular2-chromecast-receiver-starterkit  my-receiver
$ cd my-receiver
```

If you just want to start a new project without the angular2-chromecast-receiver-starterkit commit history then you can do:

```bash
git clone --depth=1 https://github.com/rmtuckerphx/angular2-chromecast-receiver-starterkit <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Create a new git repo
To add your project to source control:

Initialize this project as a *local git repo* and make the first commit:
```bash
$ git init
$ git add .
$ git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-receiver.git`*) and push the *local repo* to the *remote*.
```bash
$ git remote add origin <repo-address>
$ git push -u origin master
```

### Start development
Install the npm packages described in the `package.json` and verify that it works:

```bash
$ npm install
$ npm start
```
You're ready to write your application.

Remember the npm scripts in `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.

## Running the project

### Setup Chromecast
You will first need to set up your Chromecast for development. Follow the instructions in the [Set up for development](https://developers.google.com/cast/docs/developers) section on the Google Developers site.

### Google Cast SDK Developer Console
To setup your application for Google Cast, you will need to know the URL where your Custom Receiver is running. Follow the steps in [Start development](#start-development) and check the console log after executing `$ npm start` to see the Local URL (ex: http://localhost:3000) and the External URL (ex: http://111.111.1.11:3000).  Open the [Google Cast SDK Developer Console](https://cast.google.com/publish), click the Add New Application button, click Custom Receiver, and then fill out the form. Enter a Name and for the Receiver Application URL, use the External URL. After clicking the Save button, you will get an Application ID (ex: FF9922CC).

### Setup Chrome and configure sender.html
Copy the Application ID from the Developer Console (previous section), open the `sender.html` file in this project, and set the applicationID variable at the top of the script tag. Save the file.

The sender.html file must be loaded in a Chrome browser (version 32 or later) that has the Google Cast extension installed. Follow these [instructions](https://support.google.com/chromecast/answer/3212008?hl=en&ref_topic=4602553) to install the Google Cast extension for your Chrome browser.

### Start the Sender
Load the sender.html page in the browser: `http://localhost:3000/sender.html`

In the log area of the page you should see:

```bash
"onInitSuccess"
"receiver found"
```
At this point, click the Google Cast extension icon in the top-right corner of the browser and click the name of your Chromecast device from the list under the text: `Cast localhost to...`

Once connected, your log will show
```bash
"onInitSuccess"
"receiver found"
"New session ID:FDA567BE-AE26-4181-95BE-12375B112276"
```

At this point, your TV will show the Splash screen followed by the Home screen. Use the buttons on the Sender page to navigate to other screens in the Custom Receiver.


### Debugging the Custom Receiver
Follow this [tutorial](https://developers.google.com/cast/docs/debugging) on how to debug the Custom Receiver.
