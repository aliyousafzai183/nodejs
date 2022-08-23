// Render HTML & JSON in express

const express = require('express');
const app = express();

app.get("",(req,res)=>{
    // Render HTML
    res.send("<h1>Hello World</h1><input type = 'text' placeholder = 'name here' value = '${}'><input type = 'submit' value = 'Ok'>\n<a href = '/about'>Go to About</a>");

    // Render JSON
    // res.send([
    //     {
    //         name:'ali',
    //         age:21
    //     },
    //     {
    //         name:'asad',
    //         age:32
    //     }
    // ]);
})

app.get("/about",(req,res)=>{
    res.send("<h1>About Us</h1>\n<a href = '/'>Go to Home</a>");
})

app.listen(10);