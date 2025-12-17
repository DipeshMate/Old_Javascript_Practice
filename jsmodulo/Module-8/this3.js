//************Browser using NON-Strict******** */

//1111

// console.log(this) // window object

//222 function -> window object

// function displayThis(){
//     console.log(this)
        
//     }
// displayThis()

////3333 object -> object itself 

// let myobjective = {
//     name: 'Dipesh',
//     age: 24,

//     my_fun : function(){
//         console.log(this.name)
//     }
// }

// myobjective.my_fun()


///4444 object -> func-> func -> window object.

// let myobjective2 = {
//     name: 'Mate',
//     age: 24,

//     my_fun2: function () {
//         function myfun3() {
//             console.log(this)
//         }
//         myfun3()
//     }
// }

// myobjective2.my_fun2()