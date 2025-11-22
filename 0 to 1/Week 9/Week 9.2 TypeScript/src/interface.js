function isLegal(user) {
    if (user.age > 18) {
        console.log("Legal");
    }
    else {
        console.log("not Legal");
    }
}
function greet(user) {
    console.log("Hi there" + user.firstName);
}
isLegal({
    firstName: "rishabh",
    lastName: "Bhatt",
    age: 19
});
greet({
    firstName: "rishabh"
});
