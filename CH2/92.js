// Write a nodeJS script to print “My PC is on fire” on server at port no 5555 if 
// having more than 4gb physical available memory otherwise,”I need more more 
// memory” should get displayed.

const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    const freeMemoryGB = os.freemem() / (1024 * 1024 * 1024); // Convert free memory to GB

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (freeMemoryGB > 4) {
        res.end('My PC is on fire');
    } else {
        res.end('I need more memory');
    }
}).listen(5555);
