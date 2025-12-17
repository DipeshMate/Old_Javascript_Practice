// function test() {
//     let a = 2

//     function test1() {
//         console.log(a)
//     }//lexical scope has always have access to its outer function scope
// return test1
// }

// let fun = test()
// console.log(fun)
// fun()

function greet() {
    let name = 'steve johnson'

    function displayName() {
        console.log('hi i am ' + name)
        
        let age = 25
        function displayAge() {
            console.log(`my age is `+age)
        }
        return displayAge
    }
    return displayName
}

let g1 = greet()
// console.log(g1)
g1() //displayName this is closures

let g2 = greet()
// console.log(g2)
g2()