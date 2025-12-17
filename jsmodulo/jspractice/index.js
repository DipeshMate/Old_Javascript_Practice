// console.time(`your code took`);
// console.log(`Hello`);
// console.log(4 + 34);
// console.log(true);
// console.log([3, 4, 6, 7]);
// console.log({ harry: 'this', marks: 38 });
// console.table({ harry: 'this', marks: 38 });
// console.warn('this is a warning message');
// // console.clear();
// console.error(`this is an error message`);
// console.assert(566 < 209, 'age > 209 is not possible');
// console.log(566 < 209? 'true':'false');
// console.timeEnd('your code took');

// const mybtn = document.getElementById("btn1");
// mybtn.style.backgroundColor = "red"
// console.log(mybtn)

// console.log(mybtn.setAttribute("id","btn1"))

// function clearAll() {
//     const btn = document.querySelector(".btn2");

//     console.log(btn);
// }

// clearAll();

// const h1 = document.querySelector(".hello")
// h1.style.margin = " 2px -2px"


const mybtn = document.querySelectorAll("button")
mybtn.onclick = bringHello
mybtn[1].onclick = clearAll


// const btn1 = document.getElementById("btn1")
// btn1.onclick = bringHello

// const btn2 = document.getElementsByClassName('btn2')
// btn2.onclick = clearAll


function bringHello() {
    const h2 = document.createElement("h2");
    h2.innerText = "Hello"
    h2.style.margin = "2px"
    document.body.prepend(h2);
}


function clearAll() {
    const h2 = document.querySelector("h2")
    h2.remove()
}

