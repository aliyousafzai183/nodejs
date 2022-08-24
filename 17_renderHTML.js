// Render HTML AND JSON in exress

const express = require('express');
const app = express();

app.get("",(req,res)=>{
    res.send(
        `<h1>Form</h1>\n<input type = 'text' placeholder = 'Your name here' value = '${req.query.name}'>\n<input type = 'submit' value = 'submit'>`
        );
});

app.listen(5000);