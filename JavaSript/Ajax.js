console.log("Ajax");


let fetch_btn = document.getElementById('fetch-btn');

fetch_btn.addEventListener('click',buttonClickHandler);

function buttonClickHandler() {
    console.log("Button clicked: fetch btn")
    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();

    // Open the object
    // true: for asynchronous request
    // What kind of request her? GET(for fetching) request ; POST(send data too,respond according to the data sent)
    xhr.open('GET','mansi.txt',true);

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
    xhr.send();

}

