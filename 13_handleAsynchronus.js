let a = 10;
let b = 0;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(40);
    },1000);
})

waitingData.then((data)=>{
    b = data;
    console.log(a+b);
})