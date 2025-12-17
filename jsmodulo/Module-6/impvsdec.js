//we will be given a number and we have to check that if the square of that number is even or not..!!

//imperative way of writing code..!!

const a = 4

let isEven;

if (a * a % 2 == 0) {
    isEven = true
}
else {
    isEven = false
}
console.log(isEven)

//declarative way of writing code

const checkforSquare = (x) => (x * x % 2 == 0 ? true : false)

console.log(checkforSquare(6))