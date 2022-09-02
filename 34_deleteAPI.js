const dbConnection = require('./27_mongodb');
const express =require('express');
const mongodb = require('mongodb');
const app = express();

app.delete('/:id', async (req,res)=>{
    db = await dbConnection();
    rs = await db.deleteOne({_id : new mongodb.ObjectId(req.params.id)});
    res.send(rs);
})

app.listen(5000);