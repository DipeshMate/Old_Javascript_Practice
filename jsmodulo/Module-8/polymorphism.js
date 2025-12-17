// Polymorphism means the same function with different signatures is called many times.
// Features of Polymorphism:

// Programmers can be use the same method name repeatedly.
// Polymorphism has the effect of reducing the number of functionalities that can be paired together.


// Inheritance Polymorphism in JavaScript: In this example, we will create three functions 
//with the same name and different operations.This program shows JavaScript Inheritance polymorphism.
class Animal{
    sound() {
        console.log(`Animal make different sounds`)
    }
}
class Dog{
    sound() {
        console.log(`Dog Bark`)
    }
}
class Cat{
    sound() {
        console.log(`Cat meus`)
    }
}

let Animal1 = new Animal()

let Tommy = new Dog()

let percy = new Cat()

Animal1.sound()
Tommy.sound()
percy.sound()