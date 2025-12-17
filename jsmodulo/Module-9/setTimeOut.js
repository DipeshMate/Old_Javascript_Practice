//setTimeOut(cb,2000{2 second}) //set timeout is a time of function we can provide this function a time and after a particular time it will execute
//this set timeout is Asnchronous function

console.log(`before`)
function greet() {
    console.log(`hello from the setTimeOut`)
}

setTimeout(greet, 5000)

console.log(`after`)


