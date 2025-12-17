let a = undefined
// 0 falsy ,
//-0 falsy
//0n(BigInt zero) falsy,
//' ' " " `` [] {} truthy
//null falsy
//undefined  falsy
//NaN falsy
if (a) {
    console.log(`i am truthy`)
}
else {
    console.log(`i am falsy`)
}