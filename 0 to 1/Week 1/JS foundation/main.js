// write a function which take inputs of two integer and return the sum of the integer

// function sum(a,b){
//     return a+b
// }

// console.log(sum(1,2))

// function sum(num1, num2){
//     let result = num1+num2
//     return result
// }

// function sum(num1, num2, fnToCall){
//     let result = num1+num2
//     fnToCall(result)
// }

// function displayResult(data){
//     console.log("Result of the sum is : " + data)
// }

// function displayResultPassive(data){
//     console.log("Sum's result is : " + data)
// }

// // you are only allowed to call one fucntion after this
// // How will you displayRsult of a sum

// const ans = sum(1,2, displayResult)
// console.log(ans)

function greet(){
    console.log("Hello world")
}

setTimeout(greet, 3*1000);