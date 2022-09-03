const express = require('express');
require('./40_config');
const product = require('./40_schemaModel');

const app = express();
app.use(express.json());

app.post('/create', async (req,res)=>{
    let data = new product(req.body);

    let rs = await data.save();
    console.log(rs);

})

app.listen(5000);