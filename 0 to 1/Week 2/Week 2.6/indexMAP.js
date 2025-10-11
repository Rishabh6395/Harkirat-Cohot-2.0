// map, filters and arrow functions:

// Given an array, give me back a new array in which every value is multiplied by 2
// eg -> arr = [1,2,3,4,5]
// eg -> arr = [2,4,6,8,10]

// Simple loop method (which is boring) -->
// const arr = [1,2,3,4,5]
// let arr2 = []
// for(let i =0; i<arr.length; i++){
//     arr2.push(arr[i]*2)
// }
// console.log(arr2)

// Now solving this with Map function

const arr = [1,2,3,4,5]

const newArr = arr.map(function transform(i){
    return i*2
})
console.log(newArr)