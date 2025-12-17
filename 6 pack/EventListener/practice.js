const nameh1 = document.getElementById("wel");
const box1 = document.getElementById("box1");
const btn = document.getElementById("btn");
const input = document.querySelector("input");

//classlist to add class
// box1.addEventListener("click", () => {
//     box1.classList.add("classDiv");
// });

box1.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
    nameh1.style.backgroundColor = "pink";
});
box1.addEventListener("mouseout", () => {
    btn.style.transform = "";
    nameh1.style.transform = "";
});

btn.addEventListener("contextmenu", (e) => {
    btn.style.backgroundColor = "red";
    e.preventDefault();

    //remove or stop event listener

    box1.removeEventListener("mouseover", func1);
})

function func1() {
    btn.style.transform="scale(1.1)";
    nameh1.style.backgroundColor = "pink";
}

// window.addEventListener("contextmenu", (e) => {
//     e.preventDefault(blur);
//     btn.style.filter = "blur(10px)";
    
// })


//for mouse back animation
// addEventListener("click", (e) => {
//     console.log(e.clientX);
//     console.log(e.clientY);

// })

//for double theme night and light mode

box1.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "rgb(50,50,50)";
})
box1.addEventListener("click", () => {
    document.body.style.backgroundColor = "#fff";
})

// input.addEventListener("change", (e) => {
//     console.log(e.target.value);
// })
//for text on real time