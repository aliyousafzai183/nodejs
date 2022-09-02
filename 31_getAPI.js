const { MongoClient } = require('mongodb');
const express = require('express');

const app = express();
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const databaseName = "ecommerce";
const collectionName = "products";

async function dbcon() {
    data = await client.connect();
    db = data.db(databaseName);
    return db.collection(collectionName);
}

// get API
app.get('/', async (req, res) => {
    let data = await dbcon();
    result = await data.find({}).toArray();
    res.send(result);
})

app.listen(5000);