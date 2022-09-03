// it is a npm package to connect node js with mongodb
// in this tutorial we will invoke user by adding extra field to mongo by mongoose
const mongoose = require('mongoose');

const main=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/ecommerce");
    // we will write schemas for product collection
    const productSchema = new mongoose.Schema({
        name : String,
        brand: String,
        price:Number,
        category:String
    });

    // writing model
    const productModel = mongoose.model('products',productSchema);

    let data = new productModel({name:"A16",brand:"hp",price:150,category:"Mouse"});
    let result = await data.save();
    console.log(result);
}

main();

// schema vs model
// in schema we define our fields of database to apply validation

// model uses schema to connect node and mongo