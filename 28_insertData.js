// db Connection
const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017";
const databaseName = "ecommerce";
const client = new MongoClient(url);

async function dbConnect(){
    result = await client.connect();
    db = result.db(databaseName);
    return db.collection('products');
}

// insert Function
const insert =async () =>{
    const db = await dbConnect();
    const result = await db.insertOne(
        // to insert one
        {name:"S10" , brand:"vivo" , price:1000 , category: "smart-phone"}
        
        // to insertMany
        // [
        //     {name:"S22" , brand:"Samsung" , price:1600 , category: "smart-phone"},
        //     {name:"S6" , brand:"Samsung" , price:400 , category: "smart-phone"},
        //     {name:"Note8" , brand:"Infinix" , price:400 , category: "smart-phone"}

        // ]
    );
    
    if(result.acknowledged){
        console.log("Data Inserted");
    }else{
        console.log("Error Inserting Data");
    }
}

insert();

