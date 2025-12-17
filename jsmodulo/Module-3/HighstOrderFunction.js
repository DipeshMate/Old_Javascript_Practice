// const arr =[1,2,3,4,5]
// let squaredArr = []

// for (let i = 0; i < arr.length; i++)
// {
//     squaredArr.push(arr[i]*arr[i]) //The push() method adds new items to the end of an array.
// }
// console.log(squaredArr+'')

//----------------Map-------------------
//map will loop through every element of your array and will perform specific operations that you have provided.
//map method will always return you a new array with your results
//

//method - 1

// const num = [1, 2, 3, 4, 5]

// const squaredNum = num.map(function(n){
//     return n*n
// })

// console.log(squaredNum)

// method-2

// const transaction = [1000, 3000, 4000, 2000, -897, -3800, -4580]

// let rs2Dollar = 80;

// const transactionInDollar = transaction.map((amount)=> {
//     return (amount/rs2Dollar).toFixed(0)
// })
// console.log(transactionInDollar)

// const transaction = [100, 90, 70, 60]

// let rs2dollr = 70;

// const transInDollr = transaction.map((amount)=> {
//     return (amount/rs2dollr).toFixed(0)
// })
// console.log(transInDollr);

// console.log('<!------------------->')

const transaction = [1000, 3000, 4000, 2000, -897, -3800, -4580]

let rs2Dollar = 80;

// let transactionInDollar1 = transaction.forEach((amount)=> {
//     console.log(amount/rs2Dollar).toFixed(0)
// })
// console.log(transactionInDollar1)

console.log('<!------------------->')

const traindoll = transaction.map((amount)=>
{
    return (amount/rs2Dollar)
})

console.log(traindoll);
// const transactionInDollar = transaction.map((amount)=> {
//     return (amount/rs2Dollar).toFixed(0)
// })
// console.log(transactionInDollar)


//TO FIND
let courses = [
    {no:1, naam:'Love'},
    {no:2, naam:'Day'}
];



//if input parameter i.e course than can remove bracket
//singline of code then also can remove that return bracket
//here,coures is predicate function , to put some condition to find a name

//CALLBACK FUNCTION
//Q- to find a course where naam is love!!
const course = courses.find(course => 
course.naam == 'Day');

console.log(course);

console.log('<!------------------->')


// let rule = courses.map((name) => {
// return (name=='Love');
// })
// console.log(rule);


