// Write a code to implement file uploading and downloading with Express ?

var express = require('express')
var app = express()
var multer = require('multer')
const path = require('path');

app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname, { index: "277.html" }))

var store = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'upload2')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const maxsize = 1024 * 1024 * 1024
const upload = multer({ storage: store, limits: { fileSize: maxsize } })

app.post("/upload", upload.single("data"), (req, res) => {
    if (req.file) {
        res.send(`File uploaded successfully. <a href="/download/${req.file.originalname}">Download</a>`);
    }
    else {
        res.send("error in file upload")
    }
})

app.get("/download/:filename", (req, res) => {
    var f = path.join(__dirname, 'upload2', req.params.filename);
    res.download(f, (err) => {
        if (err) {
            res.send("error in downloading file")
        }
    })
})

app.listen(4646);