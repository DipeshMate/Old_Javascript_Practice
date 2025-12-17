//setInterval Asynchronous function sets an interval of time that after the particular interval your function will run again..

function hello() {
    console.log(`Hello I am Dipesh`)
}
let timer = setInterval(hello, 2000)

setTimeout(function () {
  clearInterval(timer)  
}, 10000)
//to stop

