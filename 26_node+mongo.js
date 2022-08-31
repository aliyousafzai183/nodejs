// import mongoClient from mongoDb package
const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017";
let database = "ecommerce";

// passing url to the mongo client and result will be stored in client
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();