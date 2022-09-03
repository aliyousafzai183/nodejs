// what is operating system module
// it is used to fetch information of operating system
// e.g if you want to know ram , etc

const os = require('os');

// shows the architecture of system e.g 32 or 64 bit
console.log(os.arch());

// show the free memory in bytes
console.log(os.freemem()/(1024*1024*1024));

// shows the total memory`
console.log(os.totalmem()/(1024*1024*1024));

// show the admin name
console.log(os.hostname());

// show the platform
console.log(os.platform());

// shows the user info, returns the object
console.log(os.userInfo());
