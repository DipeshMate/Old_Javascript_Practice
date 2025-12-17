//111 we have ordered coffee
function placeOrder(drink) {
    return new Promise(function (resolve, reject) { ///this rwo resolve and reject are executive methods
        if (drink === 'coffee') {
            resolve(`order for coffee received`)
        }
        else {
            reject(`other orders Rejected`)
        }
    })
}
//222 we have to process the order..!!
function processOrder(order) {
    return new Promise(function(resolve){
        console.log(`Order is being Processed`) 
        resolve(`${order} and is served`)  //as the order is being processed now we can say that resolve with this message that when this promise will be fulfilled that means the order is ready to be served now.
    })
}//next,now will see.. how the output from this
///we will call placeOrder and will pass out drink i.e coffee

// method 1 to solve the promise

// placeOrder('coffee').then(function (orderPlaced) { /// here, we've received an order for coffee,now it is ready to be resolved
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)//as the order for coffee has been received. we are passing this order to process order so,

//     return orderIsProcessed // so, process order is taking the coffee order and it is now processing it and after processing this it is returning the value after that we are catching this processed value over here. so you can see your "order is being proccessed" i.e console.log which is being  called by processOrder and it is returning the resolve method{console.log} has now the order so the order parameter is now order for coffee
//then console logging the {{processedOrder}} value
// }).then(function (processedOrder) {
//     console.log(processedOrder)
// }).catch(function (err) {
//     console.log(err)
// })///solution with promises

//method 2 to solve the promise

//Async Await -both the words are keywords which we have to use in a specific area to get the work done, its like a syntectic sugar for promise. they work exactly the same as promises..
//await:- will wait for the particular promiseified function to complete its task whether it is getting rejected or whether it is getting fulfilled i.e resolve

async function serveOrder() {
    try { // to handle error inside the await you can use try n catch block
        let orderPlaced = await placeOrder(`coffee`)
    console.log(orderPlaced)// here we will create a variable and will wait for the particular process to complete and then we'll just simply return the result.
    let processedOrder = await processOrder(orderPlaced)
    console.log(processedOrder)
    }
    catch (error) {
        console.log(error)
    }
}
serveOrder()






