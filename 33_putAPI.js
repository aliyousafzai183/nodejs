const dbconnection = require('./27_mongodb');
const express = require('express');
const dbConnection = require('./27_mongodb');
const app = express();

app.use(express.json());
// put is used to update data
app.put('/:name', async (req,res)=>{
    let data = await dbConnection();
    // http://localhost:5000/iphone 13
    result = await data.updateOne({name:req.params.name},
    {$set:req.body}
    )
    res.send("Updated");
})

app.listen(5000);