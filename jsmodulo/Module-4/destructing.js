// the destructing assignment syntax is a javascript expression that makes
// it possible to unpack values from arrays, or properties from objects, into distinct variable.

let arr = ['hi', 'i', 'am', 'dipesh']

let k = arr[1]
let j = arr[2]

console.log(k + " " +j)

let [a, b, c, d, e] = arr
console.log(a + " " + b + " " + c + " " + d + " " + e)


// let myobj = {
//     name: 'allu',
//     actor: 'tollywood actor',
//     model: true 
// }

// let {name : n, actor : p , model : g} = myobj
// console.log(n+" "+g)


// destructing an object

let myprof = {
    name: 'Jayant',
    gender: 'Male',
    address: {
        city: 'london',
        country : 'USA',
    },
    age : 23 
} 
console.log(myprof)

console.log('*******another method*****')

let { name : n,address:{ country : t }, age: g } = myprof
console.log(n+" "+t +" \n"+g)

