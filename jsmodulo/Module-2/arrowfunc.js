// function is also an object
//constructor function - pascal Notation -> first letter of every word is capital -> NumberOfStudent
//constructor function -> initialise/define

function Rectangle(len,bre){ 
    this.length = len; 
    this.breadth = bre;

    this.draw = function(){
        console.log('drawing');
    }
}
// let rectangle1 = new Rectangle(4,4);
// console.log(rectangle1);

// rectangle1.color='yellow';
// console.log(rectangle1);

// delete rectangle1.color;
// console.log(rectangle1);


let test = function(a, b) {
    console.log(a+b)
}
test(1, 5)

let test1 = function (a, b) {
    console.log(a*b)
} 
test1(7, 3)

let test2 = function (a, b) {
    console.log(a / b)
}
test2(15, 3)

let test3 = function (a, b){
    console.log(a-b)
}
test3(4, 7)

let demo = (a, b)=>{ console.log(a+b) }
demo(4, 6)

let demo1 = (a, b) => console.log(a - b)
demo1(9, 8)
let demo2 = (a, b) => console.log(a * b)
demo2(9,8)

console.log(" ------------------ ")
//primitives are copied by their value..!!
//references are copied by their address/references
let a ={value: 10}; //adress pass bcoz primitive datatype copy is being create
let b = a;//same memory location of a
a.value++;

console.log(a.value);
console.log(b.value);

console.log(" ------------------ ")

//primitive in function are pass copied by their value!! 
let ab = 10;

function inc(ab){
    ab++;
}
inc(ab);
console.log(ab);



console.log(" ------------------ ")

//object are references, so references are copied by their address ie pass by reference

let dc = {value:10};

function inc(dc){
    dc.value++;
}
inc(dc);
console.log(dc);

//for of to iterate in loop 

let arr = [1,2,3,4,5,6]

for(let value of arr)
{
    console.log(value);
}
console.log(" ------------------ ")

//for each
arr.forEach(function(number){
    console.log(number);
})
console.log(" ------------------ ")

// iterating in arrow function
arr.forEach((numbers => console.log(numbers)))

//joining arrays nmber[1,2,3] =(1,2,3); to join

let numb = [1,20,30,40,50];
const  ko = numb.join(',');
console.log(ko);
console.log(" ------------------ ")

// split method create an array to break

var message = 'its is your boy';
var parts = message.split(' ');
console.log(parts);

console.log(" ------------------ ")

let rollno = [2,5,4,3,1];
rollno.sort();
console.log(rollno);

//same have reverse method
console.log(" ------------------ ")

//filter  the particular object or value you need to see

let marks = [ 2, 3, -1 ,4, -0.2];

let result = marks.filter((mark)=>{return(mark>=0)})
console.log(result);

