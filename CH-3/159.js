// Write a function that takes an array of numbers as input and returns the sum of all 
// the numbers in the array after 3 seconds. 



function calcNumbers(arr){
    sum = 0;
    for(i of arr){
        sum += i;
    }
    console.log(sum)
}
function callback(){
    calcNumbers([5,3,1,2,4]);
}
setTimeout(callback,3000);