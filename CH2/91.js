// Write a node.js script to print 1st 10 prime numbers on browser in table of 10 
// rows. Odd no. of rows should render in blue color and even no. of rows should 
// render in red color

const http = require('http');

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

// Function to generate the first n prime numbers
function generatePrimes(n) {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

// Create HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const primes = generatePrimes(10);
    
    // Generate HTML table with alternating row colors
    res.write('<html><head><style>table { border-collapse: collapse; } td { border: 1px solid black; padding: 5px; } .blue { background-color: blue; } .red { background-color: red; }</style></head><body>');
    res.write('<table>');
    for (let i = 0; i < primes.length; i++) {
        const colorClass = i % 2 === 0 ? 'red' : 'blue';
        if (i % 10 === 0) {
            res.write('<tr>');
        }
        res.write(`<td class="${colorClass}">${primes[i]}</td>`);
        if (i % 10 === 9 || i === primes.length - 1) {
            res.write('</tr>');
        }
    }
    res.write('</table></body></html>');
    res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
