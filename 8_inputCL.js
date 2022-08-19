// creating and deleting files in input from command line

const fs = require('fs');

const input = process.argv;
const decision = input[2].toUpperCase();
const fname = input[3];

if(decision == "ADD"){
    const fcontent = input[4];
    fs.writeFileSync(fname,fcontent);
    console.log("Created File Successfully !");
}else if(decision == "DELETE"){
    fs.unlinkSync(fname);
    console.log("Deleted File Successfully !");
}else{
    console.log(decision+" is not a valid option!");
}
