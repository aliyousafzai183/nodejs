const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ecommerce");

const productSchema = mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});


// create
const create = async () => {
    const productModel = mongoose.model("products", productSchema);

    let data = new productModel({
        name: "A16",
        brand: "hp",
        price: 150,
        category: "Mouse" 
    });
    const result = await data.save();
    console.log(result);
}

create();