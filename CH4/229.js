// Write an express.js script to define one JSON array of 3 objects having 
// members
// ‘name’ and ‘height’. height must be sorted descending order according 
// to name


const express = require('express');
const app = express();

const student = [
    { name: "abc", height: 160 },
    { name: "pqr", height: 140 },
    { name: "xyz", height: 170 }
];


app.get("/", (req, res) => {
    
        res.set("content-type", "text/html");
        var s = student.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              }
              return 0;
            });
        

        res.write("<h1>Sorted height by name:</h1>");
        for (let i = 0; i < s.length; i++) {
            res.write("<h2>name: " + s[i].name + " height: " + s[i].height + "</h2>");
        }
        res.send()
    })

app.listen(5656, () => {
    console.log("Server started on port 5656");
});