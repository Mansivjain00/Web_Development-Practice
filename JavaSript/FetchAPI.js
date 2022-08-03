console.log("Fetch API");

// JSON: JavaScript Object Notation

// button with id my_btn
let mybtn=document.getElementById('my_btn');
mybtn.addEventListener

// div with id content
let content=document.getElementById(' ');


// function getData() {
//     console.log("Started get data");
//     url = "mansi.txt";
//     // here we use two .then's cause fetch returns one promise and the statement inside returns another promise
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then");
//         console.log(data);
//     })
// }

// Get Request
function getData() {
    console.log("Started get data");
    url = "https://api.github.com/users";
    // here we use two .then's cause fetch returns one promise and the statement inside returns another promise
    fetch(url).then((response)=>{
        console.log("Inside first then");
        // to show parsed data, use .json instead of .text
        return response.json();
    }).then((data)=>{
        console.log("Inside second then");
        console.log(data);
    })
}

console.log("Before get data");
getData();
console.log("After get data");


// Before completing getData(),"After get data gets printed"==> fetch has an asynchronous nature, therefore getData happens in the background

// JSON Data


// Post request
function postData() {
    url = "	https://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"test","salary":"123","age":"23"}';
    params = {
        method: "post",
        headers: {
            'Content-type':'application/x-www-form-urlencoded'
        },
        body: data,
    }
    // here we use two .then's cause fetch returns one promise and the statement inside returns another promise
    fetch(url,params).then((response)=>{
        // to show parsed data, use .json instead of .text
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}

postData();