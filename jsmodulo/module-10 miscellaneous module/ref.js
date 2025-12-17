let firstPerson = {
    name: 'adam',
    title: 'lambert',
    age: 23
}
let secondPerson = firstPerson

secondPerson.name = 'steve'

console.log(firstPerson)
console.log(secondPerson)