// Write a nodeJS script to fire an event named calculate which calculates the total 
// marks of 5 subjects about of 25 marks and displays the total marks on console as 
// an output.The calculate event fires another event name percentage which takes total 
// marks as argument and percentage should get displayed in console.
const eventEmitter = require("events");
ee = new eventEmitter();

const calcTotal = (marks)=> {
    sum = 0
    for(i of marks){
        sum += i;
    }
    console.log(sum)
    ee.emit("calcPercentage",sum);
}

const calcPercentage = (total) =>{
    console.log((total/(25*5))*100);
}

ee.on("calcTotal",calcTotal);
ee.on("calcPercentage",calcPercentage);

ee.emit("calcTotal",[20,25,25,20,24])