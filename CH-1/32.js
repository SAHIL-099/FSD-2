// Write a script to define two JSON objects named as “division1” and “division2” 
// having an array to store names of students. These name should be sorted 
// alphabetically in the object and should be be written to the file. At last, both 
// division objects should be visible with names sorted alphabetically in file

const fs = require('fs');
// Define the division1 and division2 objects with student names 
const division1 = {
students: ['John', 'Jane', 'Mike', 'Emily', 'Alex']
};
const division2 = {
students: ['Sarah', 'Michael', 'Emma', 'William', 'Olivia']
};

data=division1.students.concat(division2.students).sort()
data=JSON.stringify(data)
fs.writeFile("32.txt",data,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("data written")
    }
})
