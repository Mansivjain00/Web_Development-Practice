console.log("HTML Selectors");

/*

Element selectors
i. Single Element Selectors
ii.Multi Element Selectors

*/

let element = document.getElementById('para1');
console.log(element);

let elements_class = element.className;
// you can access className, childNodes, parentNode
console.log(elements_class);





element.style.color = 'red';
element.innerText= 'including this text';
element.innerHTML = '<b>mansi'
console.log(element);
// to grab the inner text
console.log(element.innerText);


// DOM single element selectors
let sel=document.querySelector('#para1');
// returns the first child
let sel1=document.querySelector('.para');
let sel2=document.querySelector('b');
console.log(sel);
console.log(sel1);
console.log(sel2);

sel2.style.color = 'green';


// DOM multi element selectors
let element1 = document.getElementsByClassName('para');
console.log(element1);
// returns the first child
console.log(element1[0]);

let element2= document.getElementsByTagName('div');
console.log(element2);

// you cant use forEach for html collection

// to print all divs



Array.from(element2).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
});

// OR

for(let i=0;i<element2.length;i++){
    console.log(element2[i]);
    element2[i].style.color = 'green';
}