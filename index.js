const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const html = fs.readFileSync('index.html', 'utf8');

const server = http.createServer((req,res) => {
    console.log("req",req);
    console.log("req.url",req.url);
    
    if(req.url == "/index.html"){
        res.end(html);        
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Olá Mundo');
    }
});

server.listen(port, hostname, () => {
    console.log("servidor rodando");
});