interface User {
    firstName: string,
    lastName?: string,
    age?: number
}

function isLegal(user:User){
    if(user.age>18){
        console.log("Legal")
    }
    else{
        console.log("not Legal")
    }
}

function greet(user: User){
    console.log("Hi there"+ user.firstName)
}

isLegal({
    firstName: "rishabh",
    lastName: "Bhatt",
    age: 19
})
greet({
    firstName: "rishabh"
})