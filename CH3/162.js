// Create HTTP webpage on which Home page display “Welcome to Log in page” in 
// blue color and font size must be 32px, Login page shows one HTML file from 
// static URL having Form with detail for Username, Password, submit and reset 
// button, Gallery page reflect one Image “hello.jpg” and any other page shows 
// “Page Not found”. 
// Write all necessary files to perform task. (Image already exist in same folder)


const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path === '/') {
        // Serve home page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1 style="color: blue; font-size: 32px;">Welcome to Login page</h1>');
    } else if (path === '/login') {
        // Serve login page
        fs.readFile('login.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Page Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (path === '/gallery') {
        // Serve gallery page
        fs.readFile('gallery.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Page Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (path === '/hello.jpg') {
        // Serve image file
        fs.readFile('hello.jpg', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Page Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(data);
            }
        });
    } else {
        // Handle other pages
        res.writeHead(404);
        res.end('Page Not Found');
    }
}).listen(3000);


