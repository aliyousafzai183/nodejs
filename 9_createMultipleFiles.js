// create multiple files in a specific directory

const fs = require('fs');

// lets import path module
const path = require('path');

const dirPath = path.join(__dirname,"files");

for(i = 0 ; i < 5; i++){
    fs.writeFileSync(dirPath+`/BioData${i+1}.txt`,"My name is Ali Said");
}
