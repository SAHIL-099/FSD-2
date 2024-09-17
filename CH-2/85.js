// Write a node.js script to write contents to the file in original manner. Delete file 
// after finishing writing 


const fs = require('fs');
data = "This is content of the file";

fs.writeFile("85.txt",data,(err)=>{
    if (err){
        console.log("error:",err);
    }else{
        console.log("File written successfully")
    }
})

fs.unlink("85.txt",(err)=>{
    if(err){
        console.log("Error:",err);
    }else{
        console.log("File deleted successfully");
    }
})