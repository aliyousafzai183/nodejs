const dbConnection = require('./27_mongodb');

// dbConnection().then((resp)=>{
//     resp.find({}).toArray().then((res)=>{
//         console.log(res);
//     })
// })

// OR

// 2:MODERN
const read =async ()=>{
    let data = await dbConnection();
    let result = await data.find({}).toArray();
    console.log(result);
}

read();