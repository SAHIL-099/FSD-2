// Write an express.js script to define 2 pages. 1st page has username and 
// password. Store this username to cookie on 2nd page. Cookie must 
// stay live for 1 day.
const express = require('express');
const cp = require('cookie-parser');
const app = express();

// Middleware
app.use(cp());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname,{index:"227.html"}))

// Handle login form submission
app.post('/login', (req, res) => {
  const { username } = req.body;
  // Set a cookie with the username that expires in 1 day
  res.cookie('username', username, { maxAge: 24 * 60 * 60 * 1000 });
  res.redirect('/welcome');
});

// Page 2: Welcome page
app.get('/welcome', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.send(`<h1>Welcome, ${username}!</h1>`);
  } else {
    res.redirect('/');
  }
});

app.listen(4567);

