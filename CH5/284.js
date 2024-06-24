// Write an express js script that allows only image type file to be uploaded using the multer 
// middleware and saves the file to the specific directory called “IMAGES”. If file other than 
// image has been uploaded then it will give an error message that “Upload only image file”

const express = require('express');
const multer=require('multer')
const app = express();

app.use(express.static(__dirname,{index:"284.html"}))
app.use(express.urlencoded({extended:false}))

var store = multer.diskStorage({destination:"IMAGES",
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif','image/jpg'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Upload only image file'));
    }
};

var upload=multer({storage:store,fileFilter:fileFilter})

app.post("/upload",upload.single("mypic"),(req,res)=>{
    res.send("File uploaded successfully")


})

app.listen(4545);