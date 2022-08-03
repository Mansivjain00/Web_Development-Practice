console.log("Fetch API");

// button with id my_btn
let mybtn=document.getElementById('my_btn');
mybtn.addEventListener

// div with id content
let content=document.getElementById('content');

function getData() {
    url = "mansi.txt";
    // here we use two .then's cause fetch returns one promise and the statement inside returns another promise
    fetch(url).then((response)=>{
        return response.text();
    }).then((data)=>{
        console.log(data);
    })
}

getData();