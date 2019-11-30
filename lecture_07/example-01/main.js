const http = require('http');
const url = require('url');
const port = 8181;
const pageTitle = '<html><h1> JS @ MATF 2019 </h1></html>';

http.createServer(function (req, res) {
    //write header
    res.writeHead(200, {'Content-Type': 'text/html'});
    // page header and footer
    const pageHeader = '<html><h1>';
    const pageFooter = '</h1></html>';
    // read query string
    const q = url.parse(req.url, true).query;
    let txt = 'This is lecture #' + q.lecture + ' - example 01';
    let respPage = pageHeader + pageTitle + txt + pageFooter
    // write response
    res.write(respPage); 
    res.end();
  }).listen(port);

