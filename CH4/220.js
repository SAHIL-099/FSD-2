// write an express js to link html , css and js file and show one image 
// o.jpg. And also show the description of image.


const express = require('express');
const app = express();
app.use(express.static(__dirname,{index:"220.html"}))
app.listen(4040);