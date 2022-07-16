console.log("Creating Website Layout");

// DOM is the structural representation of our html 

let a = document;
// document stores your html
console.log(a);
console.log(typeof(a));// prints object

// How to manipulate DOM
// DOM has a tree structure

// returns  all the tags and id's
// b is a HTML collection here but not an array (Cannot use for each loop to iterate over it)
let b = document.all;
console.log(b);

// returns body of the document
let c = document.body;
console.log(c);

// Returns all the forms 
let d= document.forms;
console.log(d);

// if you have more than one form, then access specific forms like this 
// document.forms[i];where i stands for 0,1,2,....


// Array.from(a) -->says create an array from a

// Check this later
// since a is HTML collection and not an array, you cannot directly iterate over it using for each, to do so follow the syntax below!
Array.from(a).forEach(function(element)  {
    console.log(element);
});

// returns all the links of the page
let e= document.links;
console.log(e);

// similarly we have document.images and document.scripts

