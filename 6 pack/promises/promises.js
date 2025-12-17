// const mypromise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) resolve("mypromise is fulfilled");
//     else
//         reject("some technical error");
// })

// mypromise.then((value) => {
//     console.log("promise fullfilled \n",value);
// }).catch((error) => {
//     console.log("got some error \n",error);
// }).finally((value) =>{
//     console.log("finally",value);
// })


const arr = [];

function fetchData(arr=[]){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            arr.push({ name: "Dipesh" });
            if (arr.length > 0) resolve("Promises Fulfilled");
            else
            reject("Some Technical error");
    }, 2000); 
})
}
fetchData(arr)
    .then((value) => console.log("promise fulfilled", value))
    .then(() => console.log(2))
    .then(() => console.log(3))
    .catch((error) => console.log(error))
    .finally((message)=>console.log("always fulfilled",message))