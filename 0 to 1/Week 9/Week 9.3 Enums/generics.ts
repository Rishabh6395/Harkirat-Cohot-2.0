
// type Input = number | string;

// function firstEl(arr: Input[]){
//     return arr[0]
// }

// const value = firstEl(["rishabh", "bhatt", 1])
// console.log(value)

// function identity<T>(arg: T):T {
//     return arg;
// }

// let output = identity<string>("myString")
// let output2 = identity<number>(100)

function getFirstElement<T>(arr: T[]):T| undefined{
    return arr[0]
}

const el = getFirstElement(["rishabh", "bhatt"])
const el2 = getFirstElement([1,2,3])
const el3 = getFirstElement([true, false])
