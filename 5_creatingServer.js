const app = require('http');

app.createServer((req,res)=>{
    res.write("<h1>ALLAH IS GREAT!</h1>");
    res.end();
}).listen(4500);

// OR

// app.createServer(arti).listen(4500);

// function arti(req,res){
//     res.write("<h1>ALLAH IS GREAT!</h1>");
//     res.end();
// }


// Arrow Function vs Simple Function

// Arrow

// const test = ()=> alert("Hello World");

// Simple

// const test(){
//     console.log("Hi");
// }