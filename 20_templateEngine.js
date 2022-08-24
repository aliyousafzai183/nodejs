// It is also npm packages
// there are many template engines but we use onl ejs template engine

const express = require("express");
const path = require('path');

const filePath = path.join(__dirname,"html");
const app = express();
app.set('view engine','ejs')

app.get("",(_,res)=>{
    res.sendFile(`${filePath}/home.html`);
})

// that must be in views folder
app.get("/page",(_,res)=>{
    const user = {
        name : 'ali said'
    }
    res.render('page',{user});
})

app.listen(5000);
