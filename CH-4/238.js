const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname,{index:"238.html"}))


app.post('/submit', (req, res) => {
    let user = req.body.username;
    let pass = req.body.password;
    let message = req.body.message;

    res.send(`
        <p>Username: ${user}</p>
        <p>Password: ${pass}</p>
        <p>Message: ${message}</p>
    `);
});

app.listen(3000);