// JavaScript Hoisting refers to the process  of moving function declaration, 
//variables or classes to the top of the file automatically by js engine.
//hoisting is the phynomenon or concepts is allow you to move your declaration above the function or program

//// Placeholder:- ${person.name} to return a string

//GETTER SETTER // always comes under object
//GETTER :- ACCESS PROPERTIES
//SETTER -> CHANGE OR MUTATE PROPERTIES
 //beacuse in the memory execution it already assign with the value undefined so, 
//you can call undefined.?? so that is why you can not call a function expression before declaring.

greet(3,4)

//function declaration
function greet(a, b){
    console.log('hello brother')
}

//Named function assignment
var add = function (a, b) {
    console.log(a+b)
}

add(3, 4)


//ARGUMENTS

function sum(a,b){
    console.log(arguments);
    return a+b;
}

let ans = sum(1,2,3,4,5); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
console.log(ans);//3
// prototype :object

console.log('<!-------DYNAMIC------------>')

//DYNAMIC FUNCTION

//special object i.e arguments helps you to use dynamic function by call n number of parameters..
// function sum(){
//     let total = 0;
//     for(let value of arguments)
//         total += value;
//     return total;
    
// }

// let answer = sum(1,2,3);
// console.log(answer);

//rest operator -> [...] are stored in array form

// function sum(...args){
//     console.log(args);//[ 1, 2, 3, 4, 5 ]
// }
// let sol = sum(1,2,3,4,5);
// console.log(sol); //undefined

// function sum(num,value,...args){
//     console.log(args);//[3, 4, 5 ]
// }
// sum(1,2,3,4,5);

console.log('<!-------DEFAULT----------->')

//DEFAULT PARAMETER
//a=5 is a  default parameter
// function addition(a=4,b){
// return a+b;
// }
// let solution = addition(3);//NAN(not a number)
// console.log(solution);

//GETTER SETTER
//GETTER :- ACCESS PROPERTIES
//SETTER -> CHANGE OR MUTATE PROPERTIES


let person={
    fname: 'Dipesh',
    lname: 'Mate',

    get fullname(){
        return `${person.fname}     ${person.lname}`;
    },

    set fullname(value){
    let parts = value.split(' ');//creating an array
    this.fname = parts[0];
    this.lname = parts[1];
    }
};

console.log(person.fullname);//getter call -> use `` for getter method Dipesh     Mate

person.fullname = `rahul kumar`;
console.log(person.fullname);//rahul     kumar
