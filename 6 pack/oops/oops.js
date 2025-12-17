//factory function

// const johnCena = {
//     height: 178,
//     weight: 120,
//     quote:()=> {
//         console.log("Head of the table");
//     }
// }

// const rock = {
//     height: 188,
//     weight: 110,
//     quote:()=> {
//         console.log("the Bull");
//     }
// }
// console.log(johnCena);
// console.log(rock);

//factory function : require to be return , camelCase - func name can't be in uppercase

// function wweSuperstar(a,b,quote) {
//     return {
//         height: a,
//         weight: b,
//         quote:() => {
//             console.log(quote);
//         }
//     }      
// }
// const johnCena = wweSuperstar(178, 120, "Head of the table");
// const rock = wweSuperstar(188, 110, "the Bull");
// console.log(johnCena);
// console.log(rock);


//constructor function == no need to be return any value, a new keyword is require to retrive an object

function wweSuperstar(height,weight,quote){
    this.height = height;
    this.weight = weight;
    this.quote = quote;
}


const johnCena = new wweSuperstar(178, 120, "Head of the table");
const rock = new wweSuperstar(188, 110, "the Bull");

johnCena.bloogGroup = "B+";
rock.bloogGroup = "AB-";

console.log(johnCena);
// console.log(johnCena.constructor);
console.log(rock);
// console.log(rock.constructor);

//reference data type, can dynamically change

const arr = new Array(265, 125);
console.log(arr.constructor); 


//function is also an object

const a = function () {
    console.log("asad");
}
console.log(a.constructor);

///[...] spread operator,
const arrays = [1, 2334, 44, 63];
console.log(...arrays,33,56);

function Hero(size,speed) {
    this.size = size;
    this.speed = speed;
}

const ironman = new Hero(10, 20);

const ironman2 = { ...ironman, added: true };
console.log(ironman);
console.log(ironman2);


ironman2.size = 23;
console.log(ironman);
console.log(ironman2);