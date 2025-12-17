//FACTORY FUNCTION

function createRectangle(len,bre){
    // let/return
    return Rectangle ={
        this:length = len,
        this:breadth = bre,

        this:draw = function(){
            console.log('drawing rectangle');
        }
    }
};

let rectangle1 = createRectangle(5,3);
console.log(rectangle1);

// var i = 1
// var n = 10
// while (i <= n) {
//     console.log(i)
//     i++;
// } //1 2 3 4 5 6 7 8 9 10

// var a = 11
// var k = 10

// do {
//     console.log(a)
//     a++
// }while (a <= k) //11

// var colours = {
//     primary: 'blue',
//     secondary: 'green',
//     tertiary : 'red'
// }

// for (var color in colours) {
//     console.log(colours[color])// for values
//     console.log(color + '->' +colours[color]) // for keys
// }
// blue
// primary->blue
// green
// secondary->green
// red
// tertiary->red

// var arr = ['red', 'green', 'white', 'blue']

// for (var color in arr)
// {
//     console.log(color+'->'+arr[color]) // red,green,white,blue
// }

// the for of statement creates a loop iterating over iterable objects,
//including: build-in String, Array, array-like objects like NodeList and also map & set

//syntax for-of

// var scores = [40, 65, 80, 95]

// for (var mark of scores) {
//     mark = mark+5
//     console.log(mark) // here, in for of values will show but in for-in it shows only keys/index
// }

//method - entries()

// let rang = ['black', 'white', 'orange']

// for (var [index, element] of rang.entries()) //this method carries the indexes value and give it to the second element
// {
//     console.log(index+'->'+element)//0->black , 1->white , 2->orange
// }

// var str = 'Scaler'

// for (var c of str) {
//     console.log(c) // each single alphabet will print
// }

// let a = 2
//let a = '2'

// console.log(a==b)//true // it will always check for the value. it won't check for the type //lose checking
//to check also for the type then a===b,then it will return false //strict checking