// Importing the checkPrime function from primeChecker.js
const { checkPrime } = require('./139md');

// Finding prime numbers between 1 and 50
console.log("Prime numbers between 1 and 50:");
for (let i = 1; i <= 50; i++) {
    if (checkPrime(i)) {
        console.log(i);
    }
}
