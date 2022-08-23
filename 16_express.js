// req and res?
// get, post, put , fetch ?
// when we have to load any page we use get
// but when form submission we use another request methods
const express = require('express');

const app = express();

app.get("",(req,res)=>{
    res.send("Home Page!");
    console.log("Hello Ali ",req.query.name);
})

app.listen(50);