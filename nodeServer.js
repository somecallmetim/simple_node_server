// 'http' is a module that is part of node by default
const http = require('http');
// 'fs' is a default node module that let's us access the computer's file system
const fs = require('fs');

// 'http' module has a create server method which takes one arg in the form of a callback
    // said callback has two args, the request and the response
    // note: request and response are typically shortened to 'req' and 'res' because
        // there are separate modules called 'request' and 'response'

const server = http.createServer((req, res) =>{
    // console.log(req);
    // console.log(req.url);

    if(req.url === '/'){
        // writeHead teaks 2 args, status code & object for the mime-type
        res.writeHead(200, {'content-type':'text/html'});
        const homePageHTML = fs.readFileSync('node.html');
        res.write(homePageHTML);
        res.end();
    }else if(req.url === "/node.png"){
        res.writeHead(200, {'content-type':'image/png'});
        const nodeLogo = fs.readFileSync('node.png');
        res.write(nodeLogo);
        res.end();
    }else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'});
        const css = fs.readFileSync('styles.css');
        res.write(css);
        res.end();
    }else {
        // writeHead teaks 2 args, status code & object for the mime-type
        res.writeHead(400, {'content-type':'text/html'});
        res.write('<h1>Sorry, this isn\'t the page you\'re looking for... </h1>');
        res.end();

    }

});

// createServer returns and object with a listen method
    // listen takes 1 arg in the form of a port to listen for http traffic on
    // note: ports <= 1000 are reserved by the OS
server.listen(3000);