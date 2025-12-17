let add = (a, b)=>{
    console.log(a+b)
}

let mul = (a, b)=>{
    console.log(a*b)
} 

let div =  (a, b)=> {
    console.log(a / b)
}

let sub =  (a, b)=>{
    console.log(a-b)
}

module.exports = {
    addition: add(2,2),
    substraction: sub(4,4),
    division: div(5,6),
    multiply : mul(8,8)
} 