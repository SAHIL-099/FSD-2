// Calculate following series for given values of x and n. x and n are any positive 
// integers statically.
// Ans=1-(x/1!)+(x2
// /2!)-(x3
// /3!)+…..+(xn
// /n!)
// Create separate module function to compute factorial used in denominator.
const fact = require("./156md.js");

const x = 5;
const n = 5;

let sum = 1;
for(let i = 1; i <= n; i++){
    let term = Math.pow(x,i)/factorial(i);
    // console.log(term);
    if (i%2 ===0){
        sum += term;
    }else{
        sum -= term;
    }
}
console.log(sum);