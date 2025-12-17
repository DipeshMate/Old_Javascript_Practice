//in class - 1

//# for #private variable can't access ouside class, you can access only by method or constructor

// const Class2 = class MyClass{ }
// const obj = new Class2(44,66);

// const MyClass = class { }
class MyClass{
     #a = 3;
     #b = 5;

    constructor(value1, value2) { //automatically constructor detect class MyClass
        this.#a = value1;
        this.#b = value2;

    }

    //getter setter method
    get getData() {
       return this.#a;
    }

    set setA(a) {
        this.#a = a;
    }
    set setB(b) {
        this.#b = b;
    }
    
    // getData() {
    //     return this.#b;
    // }

    //#print also you can do
    print() {
        console.log(`I am Printing ${this.#a} ${this.#b}`);
    }
}

const obj = new MyClass(44,66);
// console.log(obj.a);
// console.log(obj.print());
// console.log(obj);
// console.log(obj.getData()); // call by public function/method
// console.log(obj.getData); //getter method
// obj.setA = 55;
// obj.setB = 77; 
// console.log(obj); //setter method

//console.log(obj.a);// can only be access in class only not outside of the class
//and if you want to change in private variables then with the help of constructor only you can modify it



//in function - 2

// function myClass(value1,value2) {
//     this.a = value1;
//     this.b = value2;
// }
// const obj = new myClass(33,55);
// console.log(obj);

//Date() function has its own constructor
// const obj2 = new Date();
// console.log(obj2.getFullYear());

