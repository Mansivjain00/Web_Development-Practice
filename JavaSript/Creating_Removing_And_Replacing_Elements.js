console.log("Create, Remove and Replace Elements in JavaScript");

// Create element
let element = document.createElement('li');


// Add a class name to the element
element.className="second";
element.id='firstItem';
element.setAttribute('title','mytitle');
element.innerText="under second";
// to use html tags use innerHTML,for plain text use innerText
console.log(element);

// How to append the created element into the DOM

let sel=document.querySelector('.child').nextElementSibling;
console.log(sel);
sel.appendChild(element);

// Creating text Node (Alternative to innerText)
let text = document.createTextNode(" I am a text node");

element.appendChild(text);

// Replacing an Element
let element2=document.createElement('h1');
element2.id='heading';
let text2=document.createTextNode("hello");
element2.appendChild(text2);
console.log(element2);

let sel2=sel.nextElementSibling;
sel2.appendChild(element2);

element.replaceWith(element2);

let myul=document.getElementById('firstList');
console.log(myul);

// syntax --> element.replaceChild(new,old);
myul.replaceChild(element,document.getElementById('lali'));

// Remove child
myul.removeChild(document.getElementById('fili'));

// similarly you can see its class and any other attribute
let pr=element2.getAttribute('id');
console.log(pr);

// Returns a boolean result
console.log(element2.hasAttribute('href'));

element2.removeAttribute('id');
console.log(element2);

let element3=document.createElement('a');
element3.innerHTML="<br>Go to google<br>";
element3.setAttribute('href','https://www.google.com/');
console.log(element3);

let sel3=document.getElementById('third');
sel3.appendChild(element3);