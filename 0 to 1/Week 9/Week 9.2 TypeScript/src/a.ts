// function sum(a: number, b: number) {
//     return a + b
// }

// const lol = sum(1, 2)
// console.log(lol)

// function isLegal(age: number) {
//     if (age >= 18) console.log("You are legal")
//     else console.log("not legal")
// }

// isLegal(18)

// function runAftersec(fn: () => void) {
//     setTimeout(fn, 1000)
//     setInterval(() => {
//         console.log("Hi")
//     }, 1000)
// }

// runAftersec(() => {
//     console.log("hi there")
// })

const a = (name: string): string => `name is ${name}`

console.log(a("lol"))
