let url = "https://catfact.ninja/fact";
let h1 = document.querySelector("h1");

// console.log("a")
// const fetchData = async () => {
//     console.log("f1")
//         const response = await fetch(url);//asynchronous function below freeze
//     console.log("f2")
//         const data = await response.json(); //converting
//     console.log("f3")
//         h1.innerHTML = data.fact;
//     console.log("f4")
//     }
    
//     fetchData().catch((e)=>console.log("error"));
//     console.log("z")
// console.log("z1");
    
//a
//f1
//z
//z1
//z2
//f2
//f3
//f4


// console.log("a");

// setTimeout(() => {
//     console.log("timeout");
// }, 0);

// Promise.resolve().then(() => console.log("promise"));
// console.log("z");

//for above scenario Event loop works here


// error handling TRy & catch block ,mandatory with async 

// const fetchData = async() => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         h1.innerHTML = data.fact;

// // throw new error("meri marzi ye jab chaho tab la sakte h");
//     } catch (error) {
//         console.log(error.message);
//     }
//     // finally {
//     //     console.log("always complete");
//     // }
// }
// fetchData();