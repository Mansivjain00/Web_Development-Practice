console.log("if_else tutorial");

const age = 19;

if(age<18){
    console.log("Cannot Vote!");
}
else{
    console.log("Can Vote!");
}

// You can use else if incase you want to check more conditions

// === checks type and value

const age1 = '65';

// Here the value is same, but type is different(age1 is a String, but we are checking for integer)

if(age1 === 65){
    console.log("true");
}
else{
    console.log("false");
}

// "!=" represents not equal to

// "!==" represents if value and type are not equal to

// to check if variable exists or not

const vari= 19;

if(typeof vari !=='undefined'){
    console.log("vari is defined");
}
else{
    console.log("vari is not defined")
}

let drive= true;

if(drive && age>=18){
    console.log("Can Drive");
}
else{
    console.log("Cannot Drive");
}

// Ternary Operator

// condition? if condition is true execute this : else if condition is false execute this

console.log(age==19?"CAN VOTE":"CANNOT VOTE");

// Switch case

// if break statement is noot given a fall through condition will take place, i.e all the cases after  the true case will execute
switch (age) {
    case 19:
        console.log("You can vote")
        break;

    default:
        console.log("Invalid choice");
        break;
}