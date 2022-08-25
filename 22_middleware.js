// middlewares?
// are function to use with routes, with its help we can acces req and res and modify it, to check whether user is logged in or to block site

const express = require('express');

const app = express();

// Middle Ware
const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please Provide Age!");
    }else if(req.query.age < 18){
        res.send("You Cannot Access That Page!");
    }else{
        next();
    }
}

app.use(reqFilter);

app.get("",(req,res)=>{
    res.send("Welcome To Home Page");
})

app.get("/users",(req,res)=>{
    res.send("Welcome To Users Page");
})

app.listen(5000);


// Types of middleWare
// 1-Application level MidleWare
// 2-Route Level Middleware 
// 3-Error handling middleware
// 4-Built-in middleware
// 5-Third party middleware