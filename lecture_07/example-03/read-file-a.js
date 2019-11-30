'use strict';

const fs = require('fs');
var counter = 0;

//read file
fs.readFile('customer.json', (err, data) => {
    //callback after file is read 
    counter ++;
    if (err) throw err;
    let customer = JSON.parse(data);
    console.log('------------------------------------------');
    console.log(counter + '. Here you go: ' + JSON.stringify(customer));
    console.log('------------------------------------------');
});

counter ++;
console.log(counter + '. File is read or will be read?');
//continue application flow
counter ++;
console.log(counter + '. App is doing other work');