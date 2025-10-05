const fs = require('fs')

// my own async function
// async function rishabhReadFile(){
//     return new Promise(function(resolve){
//         console.log("Inside promise")
//         fs.readFile('a.txt', 'utf-8', function(err, data){
//             console.log("Before resolve")
//             resolve(data)
//         })
//     })
// }

function rishabhFun(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there")
        },3000)
    })
    return p;
}

// function onDone(data){
//     console.log(data)
// }

async function main() {
    const data = await rishabhFun()
    console.log("from promise data:" + data)
    console.log("Hi there 1")
}

main()
console.log("HI after main")