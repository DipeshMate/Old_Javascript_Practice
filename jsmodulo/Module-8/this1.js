//********NODE.jd using Non Strict**** */
//1111
// console.log(this) //empty object

//222 function -> global object
// function displayThis() {
//     console.log(this) // it works in function as a global object
// }
// displayThis()

////3333 object -> object itself
//this keyword refers to an object that is executing the current piece of code.
//it references the object is executing the current function.if the function being referenced is a regular function. 
//"this" references the global object. if the function that is being 
//referenced is a method in an object, "this" references the object itself.
// let myobjective = {
//     name: 'Dipesh',
//     age: 24,

//     my_fun : function(){
//         console.log(this.name)
//     }
// }

// myobjective.my_fun()

///4444 object -> func-> func -> global object.


let myobjective2 = {
    name: 'Mate',
    age: 24,

    my_fun2: function () {
        function myfun3() {
            console.log(this)
        }
        myfun3()
    }
}

myobjective2.my_fun2()