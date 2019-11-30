'use strict';

const fs = require('fs');
let customer;
var counter = 0;

//read file
try {
    let data = fs.readFileSync('customer.json')
    counter++;
    let customer = JSON.parse(data);
    console.log('------------------------------------------');
    console.log(counter + '. Here you go: ' + JSON.stringify(customer));
    console.log('------------------------------------------');
} catch (ex) {
    console.log(ex)
}

counter++;
console.log(counter + '. File is read or will be read?');
//continue application flow
counter ++;
console.log(counter + '. App is doing other work');