//for in and for of

let Rectangle = {
    length:2,
    breadth:4
};

//for-in loop
for(let key in Rectangle){
    //keys are reflected through key variable
    //values are reflected through Rectangle[key]
    console.log(key,Rectangle[key]); //length 2 /n breadth 4 
}

//for of only for iterable

// for(let key of Rectangle){
//     console.log(key);// rectangle is not iterable
// }

for(let key of Object.entries(Rectangle)){
    console.log(key);
}

//to find a property of object
if('length' in Rectangle){
    console.log('present');
}
else
{
    console.log('Absent');
}

//CLONING

//cloning by iteration
// let src = {
// a:10,
// b:20,
// c:30
// };
// let des = {};

// for(let key in src){
//     des[key]=src[key];
// }
// console.log(des);
// src.a++;
// console.log(des); //{value:10}



//cloning by assign:- multiple copy ko ek me
// let srco = {
// a:10,
// b:20,
// c:30
// };
// let dest = Object.assign({},srco);
// console.log(dest); //{value:10}
// srco.a++;
// console.log(dest); //{value:10}


// //cloning by spread
// let srce = {
//     a:10,
//     b:20,
//     c:30
//     };

// let desti = {...srce};
// console.log(desti); //{value:10}
// srce.a++;
// console.log(desti); //{value:10}

