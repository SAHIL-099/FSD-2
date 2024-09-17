// Write a Node.js program to CRUD operation of file management. 
// 1)Create folder named "Hello". 
// 2) Create file in it named abc.txt and enter data in to it. 
// 3) Add more data at last in file. 
// 4) Read data without getting buffer data at first. 
// 5) rename file 
// 6) Delete both file and folder

var fs=require("fs");
fs.mkdirSync("Hello");
fs.writeFileSync("Hello/abc.txt","Hello");
fs.appendFileSync("Hello/abc.txt","Hi");
data=fs.readFileSync("Hello/abc.txt");
console.log(data);
console.log(data.toString()); //Or add “utf-8”
 
//data=fs.readFileSync("node/write.txt",”utf-8”);
fs.renameSync("Hello/abc.txt"," Hello/def.txt")
fs.unlinkSync("Hello/def.txt");
fs.rmdirSync("Hello")
