let firstPerson = {
    name: 'adam',
    age: 23,

    address: {
        city: 'lucknow',
        state : 'Up'
    }

}

let secondPerson = JSON.parse(JSON.stringify(firstPerson))//deep copy of representive datetype base

secondPerson.address.state = 'Mhj'

console.log(firstPerson)
console.log(secondPerson)