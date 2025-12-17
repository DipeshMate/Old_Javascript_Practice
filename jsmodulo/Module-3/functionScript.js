//A function is a block of code that performs a specific task.

//A javaAScript function is executed when 'something' is invokes it(call it).
//funcitons are one of the fundamental building blocks in javascript

//A function in javascript is similar to a procedure- 
//a set of statements that perform a task or calculates a value, 
//but for a procedure to qualify as a function, it should take some input and 
//return an output where there is some obvious relationship between the input and the output. 
//to use a function you must define it somewhere in the scope from which you wish to call it.


// basic function

// function add(a, b) {
//     console.log(a+b) //function declaration and defination
// }
// add(4,8) //function invokation or calling
// add(3,2)

// what is an expression :- aa expression(var a = 2+3) is basically a set of statements which gives you a output.

//----------expression------------

//but in javascript, you can define a function as expression

// var add = function (a,b) {    
//     console.log(a+b) //11 or return a+b
// } // here, in this function it does not have any name because all function body is assigned to a particular variable is known as anonymous function. 
// add(4, 7) 

// var add = function(a, b){
//     return a+b
// }
// var sum =add

// var result = sum(3, 4)
// console.log(result)

//TO REMOVE

// let number = [1,2,3,4,5,6,7];

// number.pop(3);// remove from last element

// console.log(number);

// number.shift();
// console.log(number); // remove from front

// number.splice(2,2);//remove from the middle from 2 index - 2 element
// console.log(number);

//EMPTYING AN ARRAY

// let no = [1,2,3,4,5];
// let new_no = no; //put into other variable
// no = [];
// new_no.length = 0; //this is the best practice to empty the array 
// //and also by sloice method by slice(0,number.length); and also by loop using pop method
// console.log(no);//got empty array
// console.log(new_no);// elements exist;
//so its being not been deleted, so to delete number.length = 0;

//CONCAT using spread operator[...]
let a = [1,2,3];
let b = [4,5,6];
var combo = [...a,'a',...b,false];
console.log(combo);
var combo = a.concat(b);
console.log(combo);

//copy kaise krte h
let another = [...combo];
console.log(another);


