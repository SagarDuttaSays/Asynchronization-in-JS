function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink==='coffee')
            resolve("Behold! Order is received")
        else 
            reject("Oops! Incorrect drink ordered!")
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log("Your coffee is getting ready...")
        resolve(`Your ${order} is ready!`)
    })
}

placeOrder("tea")
.then(function(order){
    console.log(order); 
    let orderIsProcessing = processOrder(order) 
    return orderIsProcessing 
}).then(function(orderIsProcessed){
    console.log(orderIsProcessed)
}).catch(err=>console.log(err))
