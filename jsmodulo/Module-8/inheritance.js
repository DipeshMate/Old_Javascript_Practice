// classical inheritance:- methods and properties from base class can be passed into derived class.

class Person{
    constructor(_name, _age )
    {
    this._name = _name
    this._age = _age
    
    }
    welcome() {
    console.log(`i am ${this._name} and my age is ${this._age}` )    
    }
}

class Teacher extends Person{
constructor(_name, _age, _classStrength)
    {
    super(_name, _age)//we have used super method to extends the properties of person
    this._classStrength = _classStrength
    }
    test() {
        super.welcome()
    }
}
class Student extends Person{
constructor(_name, _age, _cgpa)
{
    super(_name, _age)
    this._cgpa = _cgpa
    }
    test2() {
        super.welcome()
    }

}
let Person1 = new Person('Adam', 62)
Person1.welcome()
console.log(Person1)

let Teacher1 = new Teacher('Jaya', 23, 50)
Teacher1.test()
console.log(Teacher1)

let Student1 = new Student('Rudra', 26, 70.26)
Student1.test2()
console.log(Student1)
