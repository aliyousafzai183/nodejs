const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ecommerce");

const schema = mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
});

// read and find
const read = async () =>{
    const model = mongoose.model('products',schema);

    const data = await model.find({});
    console.log(data);
}

read();