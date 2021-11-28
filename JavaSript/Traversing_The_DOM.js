console.log("Traversing The Document Object Model");


// To select elements through selector, if the selector has multiple elements then it selects the first element

let first= document.querySelector('.container');
console.log(first);

// to print parent and child nodes
console.log(first.childNodes);
// This also collects the new line/comment as "text"

// so if you want to avoid collecting these new lines/comments, then use "children" instead of "childNodes"

console.log(first.children);

// Deal with children if you want to deal with elements only

// To print the node name
let firstName = first.children[3].nodeName;
console.log(firstName);

// to print node type
console.log(first.children[3].nodeType);

/*
NodeTypes
1: element
2: Attribute
3: Text Node
8: Comment
9: Document
10. DOCTYPE
*/

// For children of children

let second = document.querySelector('.container');

console.log(second.children);
console.log(second.children[4].children);

console.log(second.firstChild);
// returns the first child of "childNodes". Notice its not the "first element"
console.log(second.lastChild);
// works similarly

// For "first element"
console.log(second.firstElementChild);
// for "last element" child
console.log(second.lastElementChild);

// For element count
console.log(second.childElementCount);

// for parent node
console.log(second.firstElementChild.parentNode);

// for next sibling
console.log(second.firstElementChild.nextSibling);

// for next element sibling
console.log(second.firstElementChild.nextElementSibling);
