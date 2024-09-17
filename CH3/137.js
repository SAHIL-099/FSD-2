// Write a node.js script to print query string of URL on console as well as on file 
// using ES6 Callback. 

var u=require("url");
var fs=require("fs");
var adr1=" http://localhost:8080/default.html?year=2025&month=feb";
var q1=u.parse(adr1,true);
var qdata=q1.query;
console.log(qdata);
fs.writeFile("137.txt",JSON.stringify(qdata),(err)=>
{
    if(err){
        console.log(err);
    }
    console.log("completed");
});
