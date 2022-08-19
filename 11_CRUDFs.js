// import  modules
const fs = require('fs');
const path = require('path');


console.log("CRUD With Files\n1-Create File\t\t2-Read File\n3-Update File\t\t4-Rename File\n5-Delete File");

const input = process.argv;
const dirPath = path.join(__dirname,"crud");
const dec = input[2];
const name = input[3];

const filePath = `${dirPath}/`+name;
switch(dec){
    case "1":
        // create file
        data = input[4];
        fs.writeFileSync(filePath,data);
        console.log("File Create Successfully!");
    break;

    case "2":
        // read file
        console.log("File Name : "+name);
        fs.readFile(filePath,'UTF8',(err,item)=>{
            console.log(item);
        });
        
    break;

    case "3":
        // update file
        data = input[4];
        fs.appendFile(filePath,data,(err)=>{
            if(err){
                console.log("Error Updating File!");
                return;
            }
        });
        console.log("Updated File Successfully!");
    break;

    case "4":
        // rename file
        fs.rename(filePath,`${dirPath}/`+process.argv[4],(err)=>{
            if(err){
                console.log(err);
                return;
            }
        });
        console.log("Renamed File Successfully!");
    break;

    case "5":
        // delete file
        fs.unlinkSync(filePath);
        console.log("Deleted File Successfully!");
    break;
    
    default:
        console.log("Invalid Option Selected!");
    break;
}