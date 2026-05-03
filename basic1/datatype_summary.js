


// const bigNumer = 12272722234577531n


// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "Raza"]
let myObject = {
    name: "Raza",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction)



// memory types
// 1) stack memory use for primitive type
// when U change in stack it will change in copy not in original
// 2) heap memory use for non-primitive type
// when U change in heap it will change in original

// stack memory example

let myName = "Raza"
let otherName = myName
otherName = "Mohammad Raza"

console.log([myName, otherName]);
console.table([myName, otherName]);

// heap memory example

let user1 = {
    email : "razabhaay@gmail.com",
    upiId : "razabhaay@ybl"
}

let user2 = user1

user2.email = "mohammadraza99@gmail.com"
user2.upiId = "mohammadraza99@ybl"

console.log([user1.email, user2.email]);
console.table([user1.email, user2.email])




