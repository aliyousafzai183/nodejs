// it is used to use middleware on specific routes
const express = require('express');
// i used middleware in another file
const reqFilter = require('./24_middleWare');

// another way to use it
const route = express.Router();
const app = express();


route.use(reqFilter);
app.get("",(_,res)=>{
    res.send("Home Page");
})

route.get("/about",(_,res)=>{
    res.send("About Page");
})

// we use reqFilter on specific route
app.get("/contact",reqFilter,(_,res)=>{
    res.send("Contact Page");
})

app.use('/',route);
app.listen(5000);
