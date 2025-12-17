//if we have multiple arguments multiple parameter for a single function and we do not one single function to handle all those parameters

// let sum = function (x, y) {
//     console.log(x+y)
// }

// sum(2, 3)

let sumCurried = function (x) {
    return function (y) {
        console.log(x+y)
    }
}

let sumTwoNumbers = sumCurried(2)
sumTwoNumbers(3)
// console.log(sumTwoNumbers)