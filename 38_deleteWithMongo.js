const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ecommerce");

const schema = mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
})

const deleten = async () =>{
    const model = mongoose.model('products',schema);

    const data = await model.deleteOne({
        name:"A16"
    });``

    console.log(data);
}

deleten();