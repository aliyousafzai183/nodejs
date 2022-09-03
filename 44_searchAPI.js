const express = require('express');
require('./40_config');
const product = require('./40_schemaModel');

const app = express();

app.use(express.json());

app.get('/search', async (req, res)=>{
    let data = await product.find(
        {
            "$or":[
                { "name":{$regex:req.body.name} },
                { "category":{$regex:req.body.name}}
            ]
        }
    );
    res.send(data);
})

app.listen(5000);