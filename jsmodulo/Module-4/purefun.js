// A pure function ia a function which gives the same imput, always return th same output without using external resources
// and produces no side- effects.



//impure function 

var a = 2

const addImpure = (x) => {
    console.log(a + x) //side effect
    a++
}
addImpure(2)
addImpure(2)
addImpure(2)

//pure function

function addPure(x, a) {
return x+a //no external resources uses so their is no side effect
}
console.log(addPure(3,4))