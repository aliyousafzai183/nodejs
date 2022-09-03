const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ecommerce");

const schema = mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
});

const update = async () =>{
    const model = mongoose.model('products',schema);

    let data = await model.updateOne(
        {name:"Nova 7i"},
        {
            $set:{price:440}
        }
    );

    if(data.acknowledged && data.modifiedCount > 0){
        console.warn("Updated");
    }else if(data.acknowledged && data.modifiedCount == 0){
        console.warn("Already Updated");
    }else{
        console.warn("Not Found!");
    }
}

update();