let arr = [

    { name: "A", age: 14, gender: "M" },
    {name: "B", age: 34, gender: "F"},
    {name: "C", age: 24, gender: "M"},
    {name: "D", age: 19, gender: "F"},
    {name: "E", age: 27, gender: "M"},
    {name: "F", age: 36, gender: "F"},
    {name: "G", age: 47, gender: "M"},

]

//age of all the men(males)

let males = arr.filter(function (obj) {
    return obj.gender == 'M'
})
console.log(males)

// we have to take out all obj of above males array object 
let ageOfMales = males.map(function (obj) {
    return obj.age
})
console.log(ageOfMales)

//we can do now directly by chain method..

let malesAge = arr.filter(function (obj) {
    return obj.gender == 'M'
}).map(function (male) {
    return male.age
})
console.log(malesAge)

//from the transaction array filter out poitive elements and calculate the total amount
//use filter and reduce to achieve this.

const transaction = [1000, 3000, 4000, 2000, -897, -3800, -4580]
