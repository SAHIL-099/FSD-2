// Write a node.js script to jump on a specific code by specifying path on addressbar of browser. 

const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join('index.html');

// Create the server
const server = http.createServer((req, res) => {
  // Check if the request is for the root URL
  if (req.url === '/' || req.url.startsWith('/#')) {
    // Read the HTML file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(3020);

;

