const express = require('express');
require('./40_config');
const product = require('./40_schemaModel');

const app = express();
app.use(express.json());

// to update
app.put('/update', async (req,res)=>{
    let data = await product.updateOne(
        {name : req.body.name},
        {
            $set:{price:req.body.price}
        });
    res.send(data);
})

app.listen(5000);