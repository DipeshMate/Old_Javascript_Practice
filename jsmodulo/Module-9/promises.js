//commitment, how to produce a promis
//promise method has two methods resolve and reject...so promise can be either fulfilled or can be rejected
let myPromise = new Promise(function (resolve, reject) {
    const a = 4
    const b = 5

    setTimeout(() => {
        if (a == b) {
            resolve('the values are equal')
        }
        else {
            reject('the values were not equal')
        }
    }, 2000)
})// here, new promise has been created, n produced this whole promise and printing this promise before it has actually executed the result,
//it is not gone to setTimeout n resolve the issue because the promise is still in process of checking the values...
 
//for output we have to use then & catch methood
//for pending
// console.log(myPromise)


//to fulfilled- then method

myPromise.then(function (result) {
    console.log(result)
})//fulfilled state

// consuming your promises
myPromise.catch(function (failedResult) {
    console.log(failedResult)
})//rejected state


/// your promise will got settled