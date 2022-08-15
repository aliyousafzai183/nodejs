// core modules
// FileSystem,Buffer,HTTP 

const fs = require('fs');

fs.writeFileSync("file.txt","I created file from 3_fileSystem.js");

// OR

const fs = require('fs').writeFileSync;

fs("file.txt","I created file from 3_fileSystem.js");