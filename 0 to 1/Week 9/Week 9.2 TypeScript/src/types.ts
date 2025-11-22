// type User = {
//     firstname: string,
//     lastname: string,
//     age: number
// }

// interface User2 {
//     firstname: string,
//     lastname: string,
//     age: number
// }

type Greet = number | string

function greet(id: Greet){
    console.log(id)
}

greet(1)
greet("1")