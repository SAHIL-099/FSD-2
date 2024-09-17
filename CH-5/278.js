// Write express js code to pass data from my Express.js application to a Pug template?

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const userdata = {
        user: 'john_doe',
        age: 30,
        email: 'john.doe@example.com'
    };
    res.render(__dirname+"/278.pug", { userdata }); 
});


app.listen(4545);
