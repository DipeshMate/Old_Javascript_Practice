let newPerson = {
    firstName: 'John',
    lastName: 'cena',
    age: 52,

}
let printDetails = function (city, power) {
        console.log(`I am ${this.firstName} ${this.lastName} and i am ${this.age} year old and i am from ${city} and i have ${power}`)
}

let newPerson1 = {
    firstName: 'Steve',
    lastName: 'Austin',
    age: 48,

}

//call // in call, you can just directly pass the arguments without an array
// printDetails.call(newPerson1, 'new york', 'Iron man armor')
// newPerson.printDetails.call(newPerson1)

//apply //you are just expected to put you arguments inside of an array
// printDetails.apply(newPerson1,['new york', 'Iron man armor'])


// newPerson.printDetails()
// newPerson1.printDetails()

//bind method :-// it is just a method which allows you to store your funcion and to call it {invoked} at a later stage of time.

let myFunctionBind = printDetails.bind(newPerson1,'new york', 'Iron man armor')
console.log(myFunctionBind)

myFunctionBind()