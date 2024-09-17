// Function to check if a number is prime
function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Export the function to be used in other files
module.exports = { checkPrime };
