// Write a script to define two JSON objects named as “division1” and “division2” 
// having an array to store 5 integer numbers. Write this object in a file named 
// XYZ.txt using file system. Define third array as result which gives output as 
// explained below: Suppose first array contains base value and second array contains 
// power value and then third array will give output as: a^b.For example: first 
// array[0]=2 and second array[0]=3 then it should return 8 in third array[0] .Also 
// append this result in XYZ.txt and as well as on console.
var division1 = {
    array: [1,2,3,4,5,6]
}
var division2 = {
    array: [6,5,4,3,2,1]
}

const fs = require('fs');

fs.writeFileSync("36.txt",JSON.stringify(division1) + "\n" + JSON.stringify(division2)+ "\n");


var result = []

for(i=0;i <division1.array.length;i++){
    console.log(i)
    result[i] = Math.pow(division1.array[i],division2.array[i])
}
console.log(result)
fs.appendFileSync("36.txt",JSON.stringify(result))