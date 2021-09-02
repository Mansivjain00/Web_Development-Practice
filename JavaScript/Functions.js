console.log("Functions");

let name0="Mansi";
let name1="Navi";
let name2="Rashi";
let name3="Sonal";

console.log(name0 + " is good");
console.log(name1 + " is good");
console.log(name2 + " is good");
console.log(name3 + " is good");

// To avoid the above work like this we will wrap it in a function
// Functions can be called again and again


// Alternative method of the above
// Code reusability

// age will be 0 here if you dont pass a value
function greet(name,age=0){
    console.log(name+" is a good girl");
    console.log(name+"'s age is "+age);
    if(age<18){
        return "CANNOT VOTE";
    }
    return "CAN VOTE";
}

// Function calling

console.log(greet("Sonal",22));
console.log(greet("Mansi",19));
console.log(greet("Navi",18));
console.log(greet("Rashi",15));
console.log(greet("Koko"));

// Pass only necessary things to the function

// Keep one function for one work

// Make your function easy to read


