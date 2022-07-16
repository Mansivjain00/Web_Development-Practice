// Generating all the links that includes substring "instagram"

console.log("Smart Page Crawler");

let str='instagram';
let links = document.links;
console.log(links);

Array.from(links).forEach(function (element) {
    href = element.href;
    if(href.includes(str)){
        console.log(href);
    }
});



