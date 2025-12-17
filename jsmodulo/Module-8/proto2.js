function Person(_name, _age)
{
    this._name = _name
    this._age = _age

    // this.getNameAndAge = function(){
    //     console.log(`I am ${this._name} and my age is ${this._age}`)
    // }

}
Person.prototype.getNameAndAge = function () {
        console.log(`I am ${this._name} and my age is ${this._age}`)
    }
//dry code(do not repeat) 

let Person1 = new Person('Allu', 25)
let Person2 = new Person('Arjun', 26)

console.log(Person1.getNameAndAge())
console.log(Person2.getNameAndAge())

