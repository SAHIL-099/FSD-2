// Write an express.js script to define one JSON array of 3 objects having 
// members name and age. If user requests “maxName” URL, then only 
// the details of oldest person should be displayed.



const express = require('express');
const app = express();

const data= [
    { name: "abc", age: 58 },
    { name: "def", age: 40 },
    { name: "xyz", age: 88 }
];

app.get("/", (req, res) => {
    res.set("content-type", "text/html");
    res.send(data);
});

app.get("/maxName", (req, res) => {
    
        res.set("content-type", "text/html");
        var m=data.sort((a,b)=>b.age-a.age)
        res.write("<h1> name: "+m[0].name+" age:"+m[0].age)
        res.send()
});

app.listen(5656, () => {
    console.log("Server started on port 5656");
});