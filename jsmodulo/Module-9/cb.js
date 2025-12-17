//fs model actually gives you a method that is read file sync,
//which actually helps you to read the particular file and get the data from that side.

// const fs = require('fs')
console.log('before')

// let data = fs.readFileSync('f1.txt')
// console.log(`file 1 data ->` + data)

//for asynchronize behaviour
const fs = require('fs')

let data = fs.readFileSync('f1.txt')

fs.readFile(`f1.txt`, cb1)// here, read file is a asynchronous function that is execute this particullar callback function

function cb1(err,data){
    if (err) {
        console.log(err)
    }
    console.log(`file 1 data ->` + data)
    // fs.readFile(`f2.txt`, cb2) here, only for serial synchronous

}

fs.readFile(`f2.txt`, cb2)
function cb2(err, data) {
    if (err) {
        console.log(err)
    }
    console.log(`file 2 data->`+data)
}

//,here,it will send this particular read files called back to node api.
//so, it is not executed. node api:- is a memory area or this is a space where these functions get there and they wait over.
//and the event loop is working like a security guard, this will allow the callbacks only pass into the call stack.. whenevr the call stack is empty or all the synchronous code has finished or the thread is finished.
// so it is a responsibility of event loop to check whether a call stack is empty or not, and if it is empty
//it will take the functions from callback queue and it will put it into call stack and then it will execute the function
console.log('after')
