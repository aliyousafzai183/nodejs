const express = require('express');
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const app = express();

const dbName = "ecommerce";
const colName = "products";

// db connection
async function dbCon() {
    rs = await client.connect();
    db = rs.db(dbName);
    return db.collection(colName);
}

app.use(express.json());

app.post('/',async (req, res)=>{
    data = await dbCon();
    result = data.insertOne(req.body);
    res.send(result);
})

app.listen(5000);