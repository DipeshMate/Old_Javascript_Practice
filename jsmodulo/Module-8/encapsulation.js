//The JavaScript Encapsulation is a process of binding the data(i.e.variables) with the functions
//acting on that data.It allows us to control the data and validate it.
//To achieve an encapsulation in JavaScript: -

//Use var keyword to make data members private.
//Use setter methods to set the data and getter methods to get that data

//in one unit in the class only

function Person(_name, _age) {
    var name = _name
    this._age = _age

    this.getName = function () {
        return name
    }
}

let Person1 = new Person('steve', 55)
console.log(Person1.getName())


