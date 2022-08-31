// db connection
const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const databaseName = "ecommerce";
const client = new MongoClient(url);

async function dbConnect(){
    result =await client.connect();
    db = result.db(databaseName);
    collection = db.collection('products');
    return collection;
}

// update

const update = async()=>{
    data = await dbConnect();
    result = await data.updateOne(
        {name:"A54"},{
            $set:{name:"A53"}
        }
    );

    if(result.acknowledged){
        console.log("Updated");
    }
    else{
        console.log("Error Updating!");
    }

}

update();