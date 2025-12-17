//prototype is basically object that gets linked to your object by default
// whenevr you create an object and inside that particular object, you will find all the methods that you can use with your particular objects.


let myobj = {

}
console.log(myobj)

let Person1 = {
    name: 'Austin',
    age : 45
}
console.log(Person1.hasOwnProperty('name'))

//constructer function

function Person(_name, _age) {
    this._name = _name
    this._age = _age
}
let Person2 = new Person('Goldberg',38)
console.log(Person2)
