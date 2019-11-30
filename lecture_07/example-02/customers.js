const http = require('http');
const port = 8181;
const objCustomers = require('./customers.json')

http.createServer(function (req, res) {
    //write header - json content type
    res.writeHead(200, {'Content-Type': 'application/json'});
    //get string representation 
    let customers = JSON.stringify(objCustomers) 
    // write response
    res.write(customers); 
    res.end();
  }).listen(port);

