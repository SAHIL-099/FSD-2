// Write an expressJS code which loads login.html file upon browsing 
// localhost:3010. The Login.html file contains input for 
// username,password and two checkboxes named remember and 
// subscribe,on submitting the file it should go to /data page where 
// username,password and selected checkboxes are pinted,in addition to 
// that a logout button should be there,onclicking this button it should go 
// back to home page “localhost:3010/”.(GET/POST any method can be 
// used)[Write all necessary files code]


var express = require("express");
var app = express();
app.use(express.static(__dirname, { index: '228.html' }));
app.use(express.urlencoded());
app.post('/data', (req, res) => {
    const { username, password, remember, subscribe } = req.body;
    res.send(`
      <h1>Data Received</h1>
      <p>Username: ${username}</p>
      <p>Password: ${password}</p>
      <p>Remember: ${remember ? 'Yes' : 'No'}</p>
      <p>Subscribe: ${subscribe ? 'Yes' : 'No'}</p>
     <a href='/'>Logout</button>

    `);
  });

  app.listen(3000);