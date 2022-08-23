// Express Js is the framework of Node Js
// In node Js 90% express js is used
// if we directly work in node js it will take too much time
// express js takes less time to build APIs, Routes, request handling, web pages, with less code

// Installation
// npm i express

const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send("Home Page");
})

app.get('/about',(req,res)=>{
    res.send("About Page");
})

// making server
app.listen(2000);
