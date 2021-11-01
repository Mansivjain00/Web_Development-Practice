console.log("Functions");

// Functions

let names="Mansi";

// This function doesn't return anything
function greet(names) {
    console.log(`hey! ${names} A very warm welcome to you! It is lovely to have you among us!`);
}



// lets say you want to display this everytime there's someone new joining instead of writing so many lines of code, you can insert this code in a function, and call the function everytime someone new is joining

greet(names);
let=greet("Rashi");

// Function with return type
function add(a,b) {
    return a+b;
}

console.log(add(5,7));

// Assigning function to a variable
let mygreet = function (a,b) {
    return a,b;
}

console.log(mygreet(10,5));

const myobj={
    me:"Mansi",
    game: function (params) {
        return "GTA";
    }
}

console.log(myobj.game());

arr = ["fruits","vegetables","furniture"];

arr.forEach(function (element,array,index) {
    console.log(element,index);
});

// Scope

var i=234;//global scope
console.log(i);
function ui(name) {
    var i=9;//block level scope
    console.log(i);
    return `This is ${name} UI`;
}

console.log(ui("Mansi"),i);

// let --> block level scope

// Better to use "let" & "const"