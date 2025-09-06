const fs= require ("fs");

function afterfileread(err,contents){
    console.log(contents);

}
fs.readFile("./javascript/a.txt","utf-8",afterfileread);

// here the afterfileread is passed as an arrgument 


// "setTimeout" is another asynchronous function 
// that executes a certain code after some time
function run(){
    console.log("i will run after 5 sec ")

}
setTimeout(run,5000);
console.log("i will run immediately");
