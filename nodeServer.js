// 'http' is a module that is part of node by default
const http = require('http');

// 'http' module has a create server method which takes one arg in the form of a callback
    // said callback has two args, the request and the response
    // note: request and response are typically shortened to 'req' and 'res' because
        // there are separate modules called 'request' and 'response'

const server = http.createServer((req, res) =>{
    console.log(req);

    // writeHead teaks 2 args, status code & object for the mime-type
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<h1>Definitely not Hello World!</h1>');
    res.end();

});

// createServer returns and object with a listen method
    // listen takes 1 arg in the form of a port to listen for http traffic on
    // note: ports <= 1000 are reserved by the OS
server.listen(3000);