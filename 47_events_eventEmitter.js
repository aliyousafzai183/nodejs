//  what is events and events emitter
//  events is available in approx every programming language
// event is a signal e.g clicking on button runs partucular code
// code that generates events is called event emitter
// in js we make events through api

const express = require('express');
const EventEmitters = require('events');
// we used event emitter in capital coz it is a class
const app = express();

const event = new EventEmitters();

let count = 0;

event.on("CountAPI",()=>{
    count++;
    console.log("Event Called "+count);
})


app.get('/',(req,res)=>{
    res.send("Home");
    event.emit("CountAPI");
})
app.get('/search',(req,res)=>{
    res.send("Search");
    event.emit("CountAPI");
})
app.get('/About',(req,res)=>{
    res.send("About");
    event.emit("CountAPI");
})

app.listen(5000);