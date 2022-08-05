console.log("HELLO!!!...")

// 3000 milliseconds
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("GOODBYE!!")


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

//to stop the setInterval
// clearInterval(id);