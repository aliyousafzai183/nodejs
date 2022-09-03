// multer is used to upload file
// npm i multer
const multer = require('multer');
const express = require('express');

const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "_" + Date.now() + ".jpg");
        }
    })
}).single("fileupload");

app.post('/upload', upload, (req, res) => {
    res.send("file uploaded");
})

app.listen("5000");