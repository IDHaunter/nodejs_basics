const utils = require('./core/utils');
const fs = require('fs');
const http = require('http');

console.log(`${utils.now()} - index.js ***********`);

let server = http.createServer((req, res) => {
    //res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); //text/plain;
    //res.end('Testing <b>Node JS</b> features');

    res.setHeader('My-special-header', 'nodeJs');

	switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            fs.createReadStream('./templates/index.html').pipe(res);
          break;
        case '/about':
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            fs.createReadStream('./templates/about.html').pipe(res);
          break;
        default:
            res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
            fs.createReadStream('./templates/error.html').pipe(res);
            //res.end('Error 404. Page not found');
      }

    //const stream = fs.createReadStream('./templates/index.html').pipe(res);
    //stream.pipe(res);
} )

const PORT = 3000;
const HOST = 'localhost'; //127.0.0.1

server.listen(PORT, HOST, ()=>{
console.log(`Server is working: http://${HOST}:${PORT}`)
});