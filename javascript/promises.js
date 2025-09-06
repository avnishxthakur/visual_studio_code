// the Promise object represents the eventfull completion (or faliure) of an 
// a asynchronous operation and its resulting value




function setTimeoutPromisified(ms){  // setting a promisified version of setTimeout
    let p = new Promise(resolve => setTimeout(resolve,ms));
    return p;
}
function callback(){
    console.log("3 seconds have passed ");
}

setTimeoutPromisified(3000).then(callback) // promise based approach

function waitfor3sec(ms){
    setTimeout(ms,3000)  // callback based approach
 }
function main(){
    console.log(" main is called.")
 }

 waitfor3sec(main)


 function random(){
let p = new Promise ();
console.log(p)}




function random(resolve){   // whenever resolve gets called it passes the function in the .thencallback syntax
  console.log("hi i am Promise.") // resolve os also a function
  setTimeout(resolve,5000);
 }

let p = new Promise (random);  // supposed to return u something eventually
console.log(p)


//using the eventual value returned by the promise
 function callback() {
    console.log(" promise succesfull.");
 }
  p.then(callback);