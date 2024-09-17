// Write a function 'ArrayToObject' which takes in an array of arrays, and returns an 
// object with each pair of elements in the array as a key-value pair and store the 
// result in one arraytoobject.txt file.
// Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]
// Output= { Country : ' India ', State : ' Gujarat ', City : ‘Ahmedabad’ }


var fs= require("fs")
function ArrayToObject(a) {
    var temp = {};
    temp[a[0][0]] = a[0][1];
    temp[a[1][0]] = a[1][1];
    temp[a[2][0]] = a[2][1];
    return temp;
}

var data = [["Country", "India"], ["State", "Gujarat"], ["City", "Ahmedabad"]];
console.log(ArrayToObject(data));

fs.writeFileSync("ArrayToObject.txt",JSON.stringify(data))
