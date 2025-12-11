// interface User{
//     name: string;
//     age: number
// }

// function sumOfAge(user1: User, user2: User){
//     return user1.age + user2.name
// }

// const age = sumOfAge({name:"rishabh", age: 12}, {name:"harkirat", age: 13})
// console.log(age)


// Pick:

// interface User{
//     name: string;
//     age: number;
//     email: string;
//     password: string
// }

// type UpdateProps = Pick<User, 'name'| 'age' | 'email'>

// function updateUser(userInfo:UpdateProps){
//     console.log(`Name ${userInfo.name} and age ${userInfo.age}`)
// }
// updateUser({name:"rishabh", age:12, email: "rishabh@example.com"})

// Readonly:

type User = {
    readonly name: string;
    readonly age: number
}

const user: User ={
    name: 'rishabh',
    age: 12
}

// user.age = 12 // typescript complains bcz it's readonly



// RECORD and MAPS

type User1 = Record<string, {age: number; name: string}>

const users: User1 = {
     "user@1": {name: "rishabh", age: 21},
     "user@2": {name: "rishabh", age: 21}
}
// Record is a cleaner way to create object

// Maps:

const users1 = new Map()
users1.set("user@12", { name: "rishbah", age: "30", email: "risahbh@12"})
users1.set("user@123", { name: "rishbah3", age: "3", email: "risahbh@123"})

const user12 = users1.get("user@123")
console.log(user12)