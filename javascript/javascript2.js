

// reading a file and printing its content
//fs stands for file system module in node js 
// i can use this module to work with files
// to use this module i have to import it first
// i can import it using require function
// require function is used to import modules in node js
const fs = require('fs');
let data = fs.readFileSync("./javascript/a.txt", "utf8"); // utf8 helps read the file in english
console.log(data);

// asynchronous function means the code will be executed in the background
// and the code will not wait for the function to complete
// it will move to the next line of code

