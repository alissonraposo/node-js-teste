const fs = require('fs');
const http = require('http');

const hostname = '192.168.1.204';
// const hostname = '127.0.0.1';
const port = 3000;

const html = fs.readFileSync('index.html', 'utf8');

const server = http.createServer((req,res) => {
    // console.log("req",req);
    console.log("req.url",req.url);
    
    if(req.url == "/index1.html"){
        res.end(html);        
    }else{
        res.end(fs.readFileSync('.' + req.url));
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'text/plain');
        // res.end('Olá Mundo');
    }
});

server.listen(port, hostname, () => {
    console.log("servidor rodando");
});