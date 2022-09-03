const express = require('express');
require('./40_config');
const product = require('./40_schemaModel');

const app = express();
app.use(express.json());

app.get('/read', async (req,res)=>{
    let data = await product.find();
    res.send(data);
})

app.listen(5000);