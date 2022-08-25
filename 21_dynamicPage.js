// 1-how to make loop in ejs
const express = require('express');

const app = express();

app.set('view engine','ejs');

app.get("",(_,res)=>{
    const admin = {
        name: 'Ali Said',
        age: 21,
        skills:['C','Java','Html','Css','Javascript','Php','SQL','Node js']
    }

    res.render('21file',{admin});
})

app.get("/login",(_,res)=>{
    res.render('21file1');
})

app.listen(5000);