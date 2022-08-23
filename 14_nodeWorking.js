// There are five thing in node js working
// 1- Screen    2-Call Stack    3- Node API   4-Event loop    5-Terminal

//1- First of all when we execute the functions/code
//2- Each and every functions gets registered in call stack before executing. To get instruction of which function needs to be executed first
//2- when execution of any function gets finished, it automatically gets out from call stack
// 2- call stack registers functions and executes functions according to series
// 3- The timeout functions goes to Node API, because any thing which are inherited from other languages are sent to Node API, (Application programming Interface)
// 4- in node API any function taking less time is sent to Event Loop
// 4- Timeout functions waits in event loop and then goes to call stack


// It directly goes into call stack
console.log("Starting Up")

// It goes into Node API
setTimeout(()=>{
    console.log("2 second timeout")
},2000)

// It goes into Node API
setTimeout(()=>{
    console.log("0 sec timeout")
},0)
// After both inherited function goes to Node API then any function consuming less time goes to event Loop
// Event loop wait for main function in call stack to finish
// After main function finished, event loop registers inherited function to call stack
// And then call stack executes that function

// It goes to call stack
console.log("Ending Up")