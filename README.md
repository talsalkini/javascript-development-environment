[![Build Status](https://travis-ci.org/talsalkini/javascript-development-environment.svg?branch=master)](https://travis-ci.org/talsalkini/javascript-development-environment) [![Build status](https://ci.appveyor.com/api/projects/status/x184kjgd5p7vxu9b?svg=true)](https://ci.appveyor.com/project/talsalkini/javascript-development-environment)

# JavaScript Development Environment

This project is forked from a ["generic JavaScript development environment"](https://github.com/coryhouse/javascript-development-environment) built from scratch in ["Building a JavaScript Development Environment" on Pluralsight](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents). This a starter kit is not tied to any specific JS framework.


## Get Started

1. **Install [Node 9](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `git clone https://github.com/talsalkini/js-starter.git` or [download the zip](https://github.com/talsalkini/js-starter/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd js-starter`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Make sure you're running the latest version of Node. Node 7 has issues on some Windows machines.
3. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
4. Don't run the project from a symbolic link. It will cause issues with file watches.
5. Having linting issues? Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in the course.
6. Seeing `Error: listen EADDRINUSE :::3000`? That means port 3000 is already in use on your machine. You probably have another instance of this project running on your machine in a different window. So find that window and kill the other instance using Ctrl+C.
7. Nothing above work? Delete your node_modules folder and re-run npm install.

### Development Dependencies

| **Dependency**              | **Use**                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| babel-cli                   | Babel Command line interface                                                                              |
| babel-core                  | Babel Core for transpiling the new JavaScript to old                                                      |
| babel-loader                | Adds Babel support to Webpack                                                                             |
| babel-preset-env            | Babel preset for running all the latest(env) standardized JavaScript features                                  |
| babel-register              | Register Babel to transpile our Mocha tests                                                               |
| cheerio                     | Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation |
| cross-env                   | Cross-environment friendly way to handle environment variables                                            |
| css-loader                  | Add CSS support to Webpack                                                                                |
| style-loader                  | Add CSS support to Webpack                                                                                |
| eslint                      | Lints JavaScript                                                                                          |
| eslint-plugin-import        | Advanced linting of ES6 imports                                                                           |
| eslint-watch                | Add watch functionality to ESLint                                                                         |
| eventsource-polyfill        | Polyfill to support hot reloading in IE                                                                   |
| expect                      | Assertion library for use with Mocha                                                                      |
| express                     | Serves development and production builds                                                                  |
| extract-text-webpack-plugin | Extracts CSS into separate file for production build                                                      |
| file-loader                 | Adds file loading support to Webpack                                                                      |
| jsdom                       | In-memory DOM for testing                                                                                 |
| mocha                       | JavaScript testing library                                                                                |
| npm-run-all                 | Display results of multiple commands on single command line                                               |
| open                        | Open app in default browser                                                                               |
| rimraf                      | Delete files                                                                                              |
| url-loader                  | Add url loading support to Webpack                                                                        |
| webpack                     | Bundler with plugin system and integrated development server                                              |
| webpack-dev-middleware      | Adds middleware support to webpack                                                                        |
| webpack-hot-middleware      | Adds hot reloading to webpack                                                                        |
| jquery                      | Adds jquery support                                                                         |
| handlebars                  | Adds js templating framework                                                                  
           