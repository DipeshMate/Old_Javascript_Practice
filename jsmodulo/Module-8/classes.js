//class keyword- used in creating multiple classes with the help of constructor method by this method we are actually create our key value pairs

class person{
    constructor(_name, _age)
    {
        this._name = _name
        this._age = _age

    }

    welcome() {
        console.log(`welcome ${this._name}`)
    }
}

let person1 = new person('Dipesh', 21)
let person2 = new person( 'Akshay', 22)

let person3 = new person( 'Devrat', 23)

let person4 = new person( 'Dipesh', 24)
let person5 = new person('Dipesh', 24)

person1.welcome()
console.log(person1)
person2.welcome()
console.log(person2)
person3.welcome()
console.log(person3)