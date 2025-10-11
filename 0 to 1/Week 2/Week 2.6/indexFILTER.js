// Filter

// What if i tell u, given an array, give me back all the even values from it

// const arr = [1,2,3,4,5]
// const finalArr = []

// for(let i =0; i<arr.length; i++){
//     if(arr[i]%2 == 0){
//         finalArr.push(arr[i])
//     }
// }
// console.log(finalArr)

// with Filter Method with arrow function:
const arr = [1, 2, 3, 4, 5];

const ans = arr.filter((n) => {
  if (n % 2 == 0) return true;
  else return false;
});
console.log(ans);
