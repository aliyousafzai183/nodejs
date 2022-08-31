const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const databaseName = "ecommerce";
const client = new MongoClient(url);

async function dbCon(){
    result = await client.connect();
    db = result.db(databaseName);
    return db.collection("products");
}

const deleteData =async ()=>{
    data =await dbCon();
    result = await data.deleteMany(
        {name:"S10"}
    );

    if(result.deletedCount > 0){
        console.log("Deleted");
    }else{
        console.log("Not Found!");
    }
}

deleteData();