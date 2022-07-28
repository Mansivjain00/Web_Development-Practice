console.log("Ajax");


let fetch_btn = document.getElementById('fetch-btn');

fetch_btn.addEventListener('click',buttonClickHandler);

function buttonClickHandler() {
    console.log("Button clicked: fetch btn")
    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();

    // Open the object
    // GET REQUEST
    // true: for asynchronous request
    // What kind of request her? GET(for fetching) request ; POST(send data too,respond according to the data sent)
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    // you can say mansi.txt inplace of the url to get data from mansi.txt

    // Post Request
    // URL taken from dummy json rest api
    
    xhr.open('POST',`https://dummy.restapiexample.com/api/v1/create`,true);
    // For post request you have to send some data
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');


    // What to do on progress(Optional)
    xhr.onprogress = function () {
        console.log("On Progress");
    }

    // After information is loaded(Response is ready)
    // When you want a spinner or loader
    // You've reached ready state 4(done state)
    xhr.onload = function () {
        // 200 -->success
        // 404 -->not found
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.error("Error occured");
        }
    }

    // On ready state change
    xhr.onreadystatechange = function () {
        // 5 ready states are available
        // 0-4
        // 0: unsent(Request unsent)
        // 1: opened(open() has been called)
        // 2: headers recieved(send() has been called and headers and status are available)
        // 3: Loading(Loading data)
        // 4: Done
        console.log("Ready state is: "+xhr.readyState);
    } 

    // Send request
    // The text gets loaded without reloading the page
    // xhr.send();

    // for Post
    let params = "name&test&salary&123&age=23";
    xhr.send(params);


    console.log("We are done");
    // This gets printed first and then , since we've set async to true, therefore the code runs asynchronously(xhr.open(...,...,true))
    // if you set it to false, "we are done willbe printed later"

}

// Post request urn and params content ttaken from dummy json rest api

let pop_btn = document.getElementById('Populate');

pop_btn.addEventListener('click',popHandler);

function popHandler() {
    console.log("Button clicked: populate btn")
    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);

    xhr.onload = function () {
        // 200 -->success
        // 404 -->not found
        if(this.status === 200){
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str="";
            for(key in obj){
                str =str + `<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML=str;
        }
        else{
            console.error("Error occured");
        }
    }
    
    
    xhr.send();

    console.log("We are done frtching employees");
}