function foo () {
    'use strict';
    console.log(this.a);
}

var a = 2;

foo();