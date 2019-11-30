const http = require('http');
const port = 8181;
const uuidv1 = require('uuid/v1')

http.createServer(function (req, res) {
    //write header
    res.writeHead(200, {'Content-Type': 'text/html'});
    // write response
    res.write('<html></br></br><h1> Test npm or yarn </h1><p>requestId: ' + uuidv1() + ' </html>'); 
    res.end();
  }).listen(port);

