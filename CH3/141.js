// Write a node.js script to create two listeners for a common event call their 
// respective callbacks. Print number of events associated with an emitter. Remove 
// one of the listeners & call remaining listners again. Print number of remaining 
// listners also.


eventEmmiter = require("events");
ee = new eventEmmiter();

const function1 = ()=>{
    console.log("Function 1 called")
}
const function2 = ()=>{
    console.log("Function 2 called")
}

ee.on("myEvent",function1);
ee.on("myEvent",function2);

console.log(ee.listenerCount("myEvent"));



ee.removeListener("myEvent",function2);
console.log(ee.listenerCount("myEvent"));


