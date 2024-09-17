// Write a node.js script to create my own module to calculate reverse of a given 
// number. That module should be use to compute all numbers between 1 to 100 in 
// which square of reverse & reverse of sqaure is same. This has call of reverse twice 
// so call it from module. Also keep a function to compute average of any number of 
// elements.

const {reversedNumber, calcAverage} = require("./136md.js");

isSpecial = (a)=>{
    reversed = reversedNumber(a);
    return ((a*a)==(reversed * reversed));
}

special = []

for(i=1;i<101;i++){
    if(isSpecial(i)){
        special.push(i);
    }
}

console.log(special);
console.log(calcAverage(special));