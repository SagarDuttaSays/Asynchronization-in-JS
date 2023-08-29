const fs = require('fs')
const { stringify } = require('querystring')

//synchronous method
console.log("first line")
const file = fs.readFileSync('text.txt').toString()
console.log(file)
console.log("last line")

//asynchronous method
console.log("first line")
f = (err, data)=>{
    if(err)
        console.log(err)
    else 
        console.log((data).toString())
}
fs.readFile('text.txt', f)
console.log("last line")
