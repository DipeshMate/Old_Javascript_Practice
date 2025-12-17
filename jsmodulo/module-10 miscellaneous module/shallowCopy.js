/// spread operator(...) basically takes out
// the first properties inside in your object and creates a seperate reference
let firstPerson = {
    name: 'adam',
    age: 23,

    address: {
        city: 'lucknow',
        state : 'Up'
    }

}

let secondPerson = { ...firstPerson } //here, we have assigning the first person
secondPerson.name = 'steve'
secondPerson.address.city = 'delhi'
console.log(firstPerson)
console.log(secondPerson)