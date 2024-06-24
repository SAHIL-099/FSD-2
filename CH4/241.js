const express = require('express');
const app = express();

app.get('/html', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Sample HTML Response</title>
            </head>
            <body>
                <h1>Hello, this is an HTML response</h1>
                <p>This is a sample HTML response from Express</p>
            </body>
        </html>
    `);
});

app.get('/json', (req, res) => {
    res.json({
        message: "Hello, this is a JSON response",
        status: "success",
        data: {
            user: "John Doe",
            age: 30
        }
    });
});
app.listen(4545);

