// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

// let name = "Dipesh"
// let surname = "Mate"
// console.log("my name is",name,surname+".")
// console.log("my name is"+" "+name+" "+surname+".")

// let myname = `Dipesh`
// let mysurname = `mate`
// console.log(`my name is ${myname} ${surname}.`)

// let a = 34
// console.log(a)
// console.log(typeof String(a))
// let b = "dipesh"
//a=a.toString();
// console.log(b)
// console.log(typeof Number(b))

// var arr = [2, 3, 4]
// console.log(arr)//[2,3,4]
// var a = arr[2]
// console.log(a)//4

// //replace
// arr[1] = 5
// console.log(arr)//[2,5,4]
// console.log('the length of the array', arr.length)//3

// var arr1 = [1, 2, 3, 4]
// console.log(arr1)//[1,2,3,4]

// var a = 12;
// var b = true;
// console.log(a+b+10)//23

// // The pop() method removes (pops) the last element of an array.

// // The pop() method changes the original array.

// // The pop() method returns the removed element.

// var c = arr1.pop()
// console.log(c)//4
// console.log('popped array', arr1)//[1,2,3]


// // The push() method adds new items to the end of an array.

// // The push() method changes the length of the array.

// // The push() method returns the new length.

// var d = arr1.push(40)
// console.log(d) //4, it will add a new element in an array by push method
// console.log('pushed array', arr1)//[1,2,3,40]

// var arr3 = [7, 8, 9]
// console.log(arr3)//[7,8,9]

// var e = arr3.shift()
// console.log(e)//7
// console.log('shift array', arr3)//[8,9]


//---------------------

// Objects are used to store key/value (name/value) collections.

// var detail = {
//     name: 'goku',
//     class: [1,2,3,4],
//     method: 'recursion',
//     address: {
//         state: ['new york','chicago'],
//         city: {
//             place: ['brooklyn','london'],
//             pin : 785358
//         }
//     },
//     isHeOk : true
// }
// console.log(detail)//{name: 'goku', class: 1, method: 'recursion'}
// console.log(detail.class[1]) // 2
// console.log(detail.address.city.place[1])//london

// detail.isHeOk = false
// console.log(detail)

// delete detail.address
// console.log(detail)

// var age = 26
// if (age > 35)
//     console.log('he is over age ', age)
// else if (age < 35 && 25 < age)
//     console.log('he is ok', age)
//     else console.log('he is master',age)


