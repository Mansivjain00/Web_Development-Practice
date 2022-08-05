console.log("Try and Catch");

// Pretend this is coming from a server
let a = "Mansi V Jain";
a=undefined;
if(a!=undefined){
    throw new Error("This is not undefined");
}
else{
    console.log("This is undefined");
}

// try to run the code, if not execute the catch block
try {
    mammaaaaaaaa
    // this should ideally give an error, but instead it goes into the catch block
} catch (error) {
    console.log("Are you okay? Error: "+error);
    console.log("Error name: "+error.name);
    console.log("Error message: "+error.message);
}finally{
    console.log("I will always execute");
}

// finally block executes irrespective of error occurence