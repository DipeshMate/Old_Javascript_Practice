// ******problems with var....******

// var a = 10
// var a = 14
// console.log(a)// 14

// var k = 30
// if (k === 30)
// {
//     var b = 40
//     console.log(b)//40
// }
// console.log(b)//40


//<******************let*******************

//solution of the redeclaration problem

// var a = 10

// var a = 20
// console.log(a) // no error

// let b = 10

// let b = 25
// console.log(b)// error because 'b' identifier  has already been declared

//variable declared with var keyword are not blocked scoped they are function scoped
//but variable declared with let keyword are block scoped

// if (true) {
//     let c = 59
//     console.log(c)
// }
// // console.log(c) //error c is not defined


//<******************* const***********>

// we cannot reassign the value

const d = 99
// const d = 88 //error  cannot redeclare //Identifier 'd' has already been declared
//but in 'let' we can reassign the value
// d = 87 // error, assignment to constant variable
console.log(d)//99

