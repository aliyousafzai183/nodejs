const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'files');

// to display list of files
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    });
});