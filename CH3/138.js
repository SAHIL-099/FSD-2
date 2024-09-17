// Write a node.js script to load a simple.html file on nodejs web server & prints its 
// contents as an html content. 

const fs = require("fs");
const http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fs.readFileSync("index.html"));
    res.end()
}).listen(3020)
