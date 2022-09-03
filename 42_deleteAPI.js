const express = require('express');
require('./40_config');
const product = require('./40_schemaModel');

const app = express();
app.use(express.json());

app.delete('/delete', async (req,res)=>{
    let data = await product.deleteOne({
        name : req.body.name
    });
    res.send(data);
})

app.listen(5000);