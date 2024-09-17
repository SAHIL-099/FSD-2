// Write a node.js script using event handling to consider an errorneous triangle to 
// find area. Take fix values of all three sides. 
// (1) If any of the side is negative, then print the message “Sides must be positive” 
// using event handler. 
// (2) If perimeter of triangle is negative then print the message “Perimeter must be 
// positive” using event handler.
// (3) Both above messages must be printed in sequence.

const eventEmmiter = require("events");
ee = new eventEmmiter;
ee.on("negetiveSide",()=>{
    console.log("Sidees must be positive");
})
ee.on("negetivePerimeter",()=>{
    console.log("Perimeter Positive");
})

let a = -5;
let b = -5;
let c = -10;
let perimeter = a + b + c;

if(a < 0 || b < 0 || c < 0){
    ee.emit("negetiveSide");
    if(perimeter < 0){
        ee.emit("negetivePerimeter");
    }
}else{
    var p = (a+b+c)/2;
    var area = Math.sqrt(p*((p-a)*(p-b)*(p-c)));
    console.log(area);
}


