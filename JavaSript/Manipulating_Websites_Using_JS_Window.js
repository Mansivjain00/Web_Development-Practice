console.log("Manipulating Websites Using JS Window");

// DOM --> Document Object Model

// Document Object of JavaScript is a part of windows

let a = window;

console.log(a);//displays window object

// we can access alert through "window.alert()" and normal "alert()"" beacuse window object is normally global in client side JavaScript

//alert message
window.alert("HEY!");

//prompt inputs stuff
let b = prompt("This will destroy your desktop");
console.log(b);

//confirm to confirm an action, returns a boolean value
console.log(confirm("Are you sure?"));

let c = window.document;
console.log(c);

console.log(window.innerHeight);
console.log(window.innerWidth);

// Similarly we have outer width and outer height

// To check how much you have scrolled towards y and x
console.log(scrollX);
console.log(scrollY);

let d=location;
// location.reload will reload your page
// locattion.href: will give you theurl of the page
// location.href='google.com' will lead you to google.com
console.log(d);

let e=location.toString();
// converts the location "to String"
console.log(e);

let f=window.history;
console.log(f);

// history.go(-1); takes you to the previous page
// history.go(1) : takes you one step forward

