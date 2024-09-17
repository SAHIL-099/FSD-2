// Create HTTP webpages where Admin page display “Sufficient Memory:” in bold 
// blue color with font size of 24px along with available memory in GB with font 
// size 32px and red color if available physical memory of the system is greater than 
// 1 GB.
// Else it shows “Not Sufficient Memory” in simple text. 
// For any other page requested then shows “You are not admin” message.

const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    if (req.url === '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const freeMemoryGB = os.freemem() / (1024 * 1024 * 1024);

        let message;
        if (freeMemoryGB > 1) {
            message = `<b style="color: blue; font-size: 24px;">Sufficient Memory:</b> <span style="font-size: 32px; color: red;">${freeMemoryGB.toFixed(2)} GB</span>`;
        } else {
            message = 'Not Sufficient Memory';
        }
        res.end(message);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('You are not admin');
    }
}).listen(3040);


