const http = require('http');
const port = 8181;
const objCustomer = require('./customer.json')

http.createServer(function (req, res) {
    //write header - json content type
    res.writeHead(200, {'Content-Type': 'application/json'});
    //get string representation 
    let customer = JSON.stringify(objCustomer) 
    // write response
    res.write(customer); 
    res.end();
  }).listen(port);

