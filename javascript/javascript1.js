//assignment 1
function sum(a, b) {
    return a + b;
}
    console.log(sum(2, 3)); // Output: 5
    console.log(sum(-1, 1)); // Output: 0
    console.log(sum(0, 0)); // Output: 0



//assignment 2
function canVote(age){
    return age >=18;
}
let age = 20;
console.log(canVote(age));
age = 16;
console.log(canVote(age));  
age = 18;
console.log(canVote(age));

//for loop and loops
let users = ["avi","bora","priyansh","joshi"];
let totalUsers = users.length;
//INITOATION SECTION,CONDITION SECTION,INCREMENT/DECREMENT SECTION
for (let i=0; i<totalUsers; i++){
    console.log(users[i])
} 
 
// OBEJCT 
//ASSIGNMENT 1 
let person  = {
    name: " avi",
    age : 14,
    gender : "male"
}
if (person.gender =="male"){
    console.log("mr."+person.name + " your age is "+ person.age +".")
}
else{
    console.log("mrs."+person.name + "your age is "+ person.age +".")
}
if (person.age >= 18){
    console.log( " You are legal to vote. ")
}
else {
    console.log(" You are not legal to vote. ")
}

// array of objects 
let students =[ 
    { name : "avi ", age : 20 , gender :" male "},
    { name : "bora ", age : 18 , gender :" male " },
    { name : "priyansh ", age : 17 , gender :" female "}        
]
 // accesing the elemwets of array of objects 
 console . log (students[0].name); // Output: avi
 console . log (students[1].age); // Output: 18
 console . log (students[0].gender); // Output: male 

 for (let k = 0 ; k < students.length; k++)
 {
    console.log(students[k].name + "-"+ students[k].age +"-"+ students[k].gender)
 }

 
// netsed objects 
// the array of objects can store the nested objects such as 
let arr=["avi","20", //this is index 0 and another array has been stored at index 2
    {name : "priyansh" ,
        age : 19,
        cities :["ghaziabad","gurgaon","chandigarh"]// nested array 
    }
];
 console.log(arr[2].cities + " are the cities where " + arr[2].name+ " has been to or lived.");
