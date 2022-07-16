console.log("Events in JavaScript");

// When you interact with your website, you are dealing with the different kinds of events

// JavaScript helps you capture such events

document.getElementById('mainhead').addEventListener('click',function(e){

    let variable;

    console.log("You have clicked the heading");

    console.log(e);

    variable=e.target;
    // returns the element targetted
    console.log(variable);

    // Returns all the class names
    console.log(e.target.className);

    // Returns a DOMTokenList of classes, you can iterate through it using array.from
    console.log(Array.from(e.target.classList));

    // Where you clicked on the element based on the x axis, similarly we have offsetY
    console.log(e.offsetX);
    console.log(e.offsetY);

    // similar to offsetX/Y but with respect to the browser window, "CLients X and Y"
    console.log(e.clientX);
    console.log(e.clientY);

    // location.href="https://www.google.com/"
});


let b=document.getElementById('button');
b.addEventListener('click',buttonListen);
b.addEventListener('dblclick',buttonListen2);

function buttonListen(e) {
    console.log("You have clicked the button");
    console.log(e);

    // to prevent default behaviour
    e.preventDefault();  
}

function buttonListen2(e) {
    console.log("You have clicked the button twice");
    console.log(e);

    // to prevent default behaviour
    e.preventDefault();  
}

/*

Types of Events
i. click: left click;
ii. dblclick: double click;
iii. mousedown: left click, wheel, right click;
iv. mouseenter: when mouse enters the chosen area
v. mouseleave: when mouse leaves the chosen area
vi. mousemove: when mouse moves in the chosen area

*/

let check=document.querySelector('.container');

check.addEventListener('mousemove',func1);

function func1(e) {
    console.log("You triggered mouse move event");
    console.log(e.offsetX + e.offsetY );
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY})`;
}



