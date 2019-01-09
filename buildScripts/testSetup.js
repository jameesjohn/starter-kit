//This file isn't going to be transpiled so use es5 and commonJS

//Register babel to transpile our tests before they are run
require('babel-register')();

//Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function () {};
