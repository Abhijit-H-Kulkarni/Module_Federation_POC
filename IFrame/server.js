var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });  
        res.write('<html><body><h1>This is an IFrame Demo.</h1><iframe src="http://localhost:3004/demo" height="300" width="500" title="Iframe Example"></iframe></body></html>');
        res.end()
    }

    if (req.url == '/demo') {
        fs.readFile('./demo.html', function (err, html) {
            if (err) {
                throw err; 
        }     
        res.writeHead(200, { 'Content-Type': 'text/html' });  
        res.write(html);
        res.end()
    });
    }
});

server.listen(3004);

console.log('Node.js web server at port 3004 is running..')