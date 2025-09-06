// creating a promisified version of fs.readfile

const fs = require("fs");
function readTheFile(sendTheFinalValueHere){
    fs.readFile("/javascript/a.txt", "utf8", function(err,data){
        sendTheFinalValueHere(data);
    }) 
}

function readFile(filename){
    // read the file and return the value
    return new Promise(readTheFile);
}
const p = readFile();

function callback(contents){
    console.log(contents);

}
p.then(callback)