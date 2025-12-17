//some method

// some:- condition check: To get true or false based on a condition
//it will return true if even 1 element satisfies the condition


const transaction = [4000, 4520, 3000, 500, 5600, 896]

// let result = transaction.some(function(n){
//     return n > 0
// })
// console.log(result)


//every

//every:- if every elemt of an array will is positive & satisfy the condition than it will return true

let resultEvery = transaction.every(function (n) {
    return n>0
})
console.log(resultEvery)


