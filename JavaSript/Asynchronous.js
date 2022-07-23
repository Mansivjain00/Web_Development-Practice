console.log("Asynchronous Programming");

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log("This is index number: "+i);
}

console.log("Done printing");

// here, "done printing" is printed after the for loop has been completely executed

// In asynchronous programming, we would like to perform the tasks simultaneously ,and not wait for one task to complete to proceed to the next

// Asynchronous way of doing it

setTimeout(() => {
    for (let i = 0; i < 40; i++) {
        const element = i;
        console.log("This is index number: "+i);
    }
}, 100);

console.log("Asynchronous: done printing");

// "console.log("Asynchronous: done printing");" : this was not blocked till the above for loop was completed
