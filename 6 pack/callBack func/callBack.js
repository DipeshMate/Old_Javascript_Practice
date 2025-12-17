// const arr = [1, 2, 3, 4, 5, 6, 7];


// //normal function
//default array in function:- arr = []

// // function calculateMultiple10(arr=[]) {
// //     const arrays = [];

// //     // arr.forEach(arr=>{
// //     //     arrays.push(arr);
// //     // });
// //     for (let i = 0;i < arr.length; i++)
// //     {
// //         arrays.push(arr[i]*10);
// //    }

// //     console.log(arrays);
// // }
// // function calculateDivideBy10(arr) {
// //     const arrays = [];

// //     // arr.forEach(arr=>{
// //     //     arrays.push(arr);
// //     // });
// //     for (let i = 0;i < arr.length; i++)
// //     {
// //         arrays.push(arr[i]/10);
// //    }

// //     console.log(arrays);
// // }

// // calculateMultiple10(arr);
// // calculateDivideBy10(arr);


// //by callback function = do not repeat

// function calculate(arr,callback) {
//     const arrays = [];

//     // arr.forEach(arr=>{
//     //     arrays.push(arr);
//     // });//here arr() is a callback function and foreach is a high order function
//     for (let i = 0;i < arr.length; i++)
//     {
//         arrays.push(callback(arr[i]));
//    }

//     console.log(arrays);
// }
// // function multiple(a){
// //     return a * 10;
// // }
// calculate(arr,(a)=>{return a*10})
// //or 
// calculate(arr, (a) => a * 10);

// calculate(arr,(a)=>{return a/10})


