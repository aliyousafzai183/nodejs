// how to remove extensions from url for security and privacy purpose

const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname,"html");

app.get("",(_,res)=>{
    res.sendFile(`${filePath}/index.html`);
})
app.get("/main",(_,res)=>{
    res.sendFile(`${filePath}/home.html`);
})

// This is for invalid page link
app.get("*",(_,res)=>{
    res.sendFile(`${filePath}/err404.html`)
})

app.listen(5000);