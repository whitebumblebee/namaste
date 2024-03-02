# Igniting our app
- Basically the lecture is about igniting(starting) our react app properly which is required for production grade application from scratch using bundlers.
- React is an awesome library. But does it do everything on its own? The answer is no. There are whole lot of libraries/packages which complement react to build production grade, awesome web apps
- These packages are managed by npm(not node package manager).
- To initialize any project with npm, the command is:
```shell
$ npm init
```
- node and npm must be installed on your system.
- my settings while creating package.json for my project:
```shell
package name: (code) namaste-react
version: (1.0.0) 
description: Namaste React series follow along
entry point: (App.js) 
test command: jest
git repository: 
keywords: 
author: Shishir Jha
license: (ISC) 
About to write to /Users/shishirjha/Projects/coursework/namaste/ReactCourse/code/package.json:

{
  "name": "namaste-react",
  "version": "1.0.0",
  "description": "Namaste React series follow along",
  "main": "App.js",
  "scripts": {
    "test": "jest"
  },
  "author": "Shishir Jha",
  "license": "ISC"
}
```

- above command will create a `package.json` inside our. `package.json` is the configuration of npm for a project. it helps to keep track of different things like commands and package versions for a project

- whatever we download for our project will be kept track of in the package.json file.

- the most important project for large javascript projects in general and react projects from scratch is  bundler.
- the bundler we will be using in the course is `parcel`.
- for downloading parcel as the dev dependencies:
```shell
$ npm install -D parcel
```
- parcel will be downloaded as devDependencies section as shown below:
```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "description": "Namaste React series follow along",
  "main": "App.js",
  "scripts": {
    "test": "jest"
  },
  "author": "Shishir Jha",
  "license": "ISC",
  "devDependencies": {
    "parcel": "^2.11.0"
  }
}
```
- here `^` in `"parcel": "^2.11.0"` means that all the minor dependencies of the parcel will be automatically added to the project there is another specification called `~` also which updates major versions also. if we want exact version we can remove these symbols
- once the packages are installed a package-lock.json is formed which gives us the "exact" snapshot of the state and dependencies of the project
- Actually igniting our app using parcel:
```shell
$ npx parcel index.html
```
- here npx is the command which "executes" parcel to create a server and show html in port 1234 by default
- now we install react as dependencies instead of using cdn links. So, we remove the cdn limks from html and install react and react-dom.
```shell
$ npm i react react-dom
```
- once it is here we need to write the import statement at the top of the App.js file
- Now we will get error about the browser script tag. We need to add `type=module` attribute in the script tag. 
- What does parcel do for us(until now)?
  - dev build
  - Local Server
  - HMR(Hot Module Replacement) -> Parcel does it by using file watching algorithm written in C++
  - It gives faster builds because it caches a build. It caches it inside `.parcel-cache` directory
  - Parcel also does image optimization for you.
  - minification of all the file
  - bundling all the js files
  - it compresses the file size
  - consistent hashing
  - code splitting
  - differential bundling 
  - diagnostics(shows you useful and prettified error)
  - tree shaking - remove unused code
  - Error handling
  - HTTPs
  - different dev and prod bundles
- When you run `npx parcel index.html` , it will create some temporary files to run and host it on localhost. WHich will be placed inside the dist folder
- if you want to create the prod build we simply write:
```js
$ npx parcel build index.html
```

## Websites and links to check
- [parcel](https://parceljs.org/docs/)
- [browserlist](https://browserslist.dev/)