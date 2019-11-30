'use strict';

//load local modules
const msgModule = require('./first-module');
const Car = require('./second-module');

//first module
msgModule.printMessage('test message #1');
msgModule.printMessage('test message #2');

//second module
let c = new Car();
c.accelerate();
c.goLeft();
c.goRight();
c.brake();

