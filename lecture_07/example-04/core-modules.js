'use strict';

//load core module
const os = require('os');

console.log('hostname is ' + os.hostname);
console.log('home folder is ' + os.homedir);
console.log('username is ' + os.userInfo().username);

