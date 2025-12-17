//in javascript, a callback function is a function that is passed into another function as an argument.
//this function can then be invoked(mention), at a later stage.
//since javascript function are objects, functions can be passed as arguments

// function printFirstName(firstName,cllbck){
//     console.log(firstName)
//     cllbck('bagchi')
// }
// printFirstName('jay',printLastName)


// function printLastName(lastName) {
//     console.log(lastName)
// }//this function passed into another function by calling from above function i.e printFirstName..
// //then it will call printLastName then it will go to the argument cllbck and prints the lastname
// printLastName('bagchi')


//step-111
const isEven = (n) => {
    return n%2==0 //this will check no. n return is true or false
}//here, it will return a number
///step-333
let printResult = (evenfn, num) => {
    const isNumEven = evenfn(num) //step-444
    console.log(`the number ${num} is an Even Number ${isNumEven}`)//step-555
} 
//step-222
printResult(isEven, 16) //here we are calling 111 
