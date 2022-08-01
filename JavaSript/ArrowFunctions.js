console.log("Arrow Functions");

function mansi() {
    console.log("Hello Mansi!");
}

mansi();

const mansi2 = function() {
    console.log("Hello Mansi 2!");
}

mansi2();

// Valid syntax of an arrow function
const mansi3 =() => {
    console.log("Hello Mansi 3!");
}

mansi3();

// Function returning something
const greet = function () {
    return "Good Morning";
}
console.log(greet());

// arrow functions allow one liners
// one line will automatically return, you dont need braces or "return"
const greet2 = () => "Good evening";

console.log(greet2());

// to return object
// you need parenthesis then
const greet3 = () =>({name:"mansi"});

console.log(greet3());


// With one parameter you dont need paranthesis
const greet4 = name => "Good evening " + name;

console.log(greet4("Mansi"));

// But for two or more parameters you need paranthesis
const greet5 = (name,ending) => "Good evening " + name+" "+ending;

console.log(greet5("Mansi","Jain"));