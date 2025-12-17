// let url = "https://catfact.ninja/fact";
// let h1 = document.querySelector("h1");
// console.log("a");

// const fetchData=() => {
//     fetch(url).then((response) => {
//         console.log("then 1");
//         return response.json()
//     }).then((data) => {
//         console.log("then 2");
//         // console.log(data);
//         h1.innerText = data.fact;
//     }).catch((e) => console.log(e))
//     .finally(()=>console.log("final stage done"))
// }
// fetchData();
// //promise cllback are execute differently
// console.log("z");

//get , post,put,delete methods of api

//by async await

// const fetchData = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     h1.innerHTML = data.fact;
// }

// fetchData();