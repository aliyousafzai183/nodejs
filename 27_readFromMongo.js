const dbConnection = require('./27_mongodb')

// 1: OLD
// dbConnection().then((resp)=>{
//     resp.find({}).toArray().then((res)=>{
//         console.log(res);
//     })
// })

// OR

// 2:MODERN
const main =async ()=>{
    let data = await dbConnection();
    data =await data.find({}).toArray();
    console.log(data);
}

main();