//find returns the first element of an array that satisfy the condition

const transaction = [1000, 3000, 4000, 2000, -897, -3800, -4580]

let firstWithdrawl = transaction.find(function (n) {
    return n<0
})
console.log(firstWithdrawl)

//findIndex

let firstWithdrawalIndex = transaction.findIndex(function (n) {
    return n<0
})
console.log("Index-> "+firstWithdrawalIndex)
