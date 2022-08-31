// this is database connection file

const {mongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const databaseName = "ecommerce";
const client = new mongoClient(url);

async function dbConnection(){
    let result =await client.connect();
    let db = result.db(databaseName);
    return db.collection('products');
}

module.exports = dbConnection;