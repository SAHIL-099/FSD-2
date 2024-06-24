// Write an express.js script to define one JSON array of 3 objects having 
// members name and age. Names must be sorted according to age. If user 
// requests “sorted Names” URL, then all names should be printed 
// according to ascending order of age.


const express = require('express');
const app = express();

const student = [
    { name: "abc", age: 58 },
    { name: "def", age: 40 },
    { name: "xyz", age: 50 }
];

app.get("/", (req, res) => {
    res.set("content-type", "text/html");
    res.send(student);
});

app.get("/sort", (req, res) => {
    
        res.set("content-type", "text/html");
        var s = student.sort((a, b) => a.age - b.age);
        res.write("<h1>Sorted Names by Age:</h1>");
        for (let i = 0; i < s.length; i++) {
            res.write("<h2>name: " + s[i].name + " age: " + s[i].age + "</h2>");
        }
        res.send()
});

app.listen(5656, () => {
    console.log("Server started on port 5656");
});