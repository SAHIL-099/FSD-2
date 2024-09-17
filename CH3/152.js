
// Explain node js events with appropriate example with all event methods.
const eventEmmiter = require("events");
const ee = new eventEmmiter();

const function1 = () => {
    console.log("Function 1 called")
}
const function2 = () => {
    console.log("Function 2 called")
}
const function3 = () => {
    console.log("Function 3 called")
}
const function4 = () => {
    console.log("Function 4 called")
}

ee.on("myEvent", function1);
ee.on("myEvent", function2);
ee.on("myNewEvent", function3);
ee.on("myNewEvent", function4);

console.log(ee.listenerCount("myEvent"));
console.log(ee.listenerCount("myNewEvent"));

ee.removeAllListeners('myNewEvent');
ee.removeListener("myEvent", function2);

console.log(ee.listenerCount("myEvent"));
console.log(ee.listenerCount("myNewEvent"));