// Write an ExpressJS to take a UserName, Password, Textarea for 
// “message” & submit 
// button using get method.
// 1) After clicking submit button the content of submitted details should 
// be represented on “/login” page along with one “show vowel” link.
// 2) By clicking “show vowel” link count of vowel used in submitted 
// “message” will display on “/message” page. (Use next() to route page)

const express = require('express');
const app = express();
app.use(express.static(__dirname, { index: "233.html" }))

app.get('/', (req, res, next) => {
    res.send(`<p>username ${req.query.username}<br>
        <p>message ${req.query.message}
      `);
    next()
    
});

app.get("/login",(req,res)=>{
    res.send(`<a href='/message'>show vowel</a>`);

})
app.get('/message', (req, res) => {
    let message = req.query.message;
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i <message.length; i++) {
        if (vowels.indexOf(message[i])!==-1) {
            count++;
        }
    }
    res.send(`Vowels count: ${count}`);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});