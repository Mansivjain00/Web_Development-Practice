console.log("Editable Div");

let divElem = document.createElement('div');

let val = localStorage.getItem('text');
let text;
if(val==null){
      text= document.createTextNode('This is my element, click to edit it')
}
else{
    text = document.createTextNode(val);
}

let container = document.getElementById('heading');

console.log(container);

// Setting a few attributes for divElem
divElem.setAttribute('id','elem');
divElem.setAttribute('class','box');
divElem.setAttribute('style','border: 2px solid black; width : 154px; margin : 34px; padding : 23px;');

// inserting element after heading
divElem.appendChild(text);
container.appendChild(divElem);

// Adding event listener to divElem
divElem.addEventListener('click',function() {
    let noOfTextAreas=document.getElementsByClassName('area').length;
    let html=divElem.innerHTML;

    if(noOfTextAreas==0){
        divElem.innerHTML=`<textarea class="area" id="area" aria-label="With textarea">${html}</textarea>`;
    }


    // Listening to the blur event
    let textarea = document.getElementById('area');

    textarea.addEventListener('blur',function () {
        divElem.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);
    })
})





