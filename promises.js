let promise = new Promise(function(resolve, reject){
    const a = 5;
    const b = 5;
    if(a===b)
        resolve("values are equal")
    else
        reject("values are not equal")
})

//pending state -> Resolved/Rejected state -> fulfilled state
console.log(promise)

promise.then((result)=>console.log(result)).catch((err)=>console.log(err))
