// this is db connection file
// Read data from mongodb in node js
// that is proper way to read data from mongodb
const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017";
const database = "ecommerce";
const client = new MongoClient(url);

async function dbConnection(){
    let result = await client.connect();
    db = result.db(database);
    return db.collection("products");
}

module.exports = dbConnection;