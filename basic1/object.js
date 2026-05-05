//singleton
// object.create

// object literals

// how to declair key symbol
let keySym = Symbol()

// how to declair value symbol
let valueSym = Symbol ()


let aUser = {
    email: "razabhaay@gmail.com",
    contact: 8767927800,
    location: "Ahmednagar",
    isLoggedIn: false,
    lastLoggedIn: ['Monday', 'Friday'],

    //calling key of symbol in the object
    [keySym] : 'mykey1',

    //calling key of symbol in the object and also making value to symbol
    [valueSym] : Symbol ('myvalue1'),
}

// one imp thing is in js 2 things to know is 1) keys 2) value simple ex. email = "razabhaay@gmail.com" | here email is key and "razabhaay@gmail.com" is value

//2 types to access and print 
// type 1 (simple)
// console.log(aUser.contact);
// type 2 (advance)
// console.log(aUser['contact']);

// if U want to change the value in object like
aUser.contact = 7498011545
// console.log(aUser['contact']);

// if U want to freeze the object means it can not be change 
// Object.freeze(aUser)
// we are changing the email but it can't be change because the object is freeze
aUser.email = 'mohammadraza99@gmail.com'
// console.log(aUser.email);


aUser.funcCall = function(){
    // console.log('Salam, Raza');   
}

// console.log(aUser.funcCall());
// console.log(aUser.funcCall);

aUser.funCall = function(){
    // console.log(`Salam, ${this.email}`);
}

// console.log(aUser.funCall());
// console.log(aUser.funCall);



//ringt way to print key symbol
// console.log(aUser[keySym]);
//here the value is String
// console.log(typeof aUser[keySym])
//key is symbol
// console.log(typeof keySym);

//ringt way to print value symbol
// console.log(aUser[valueSym]);
//here the value is also Symbol
// console.log(typeof aUser[valueSym])
//key is symbol
// console.log(typeof valueSym);

//to print whole object
// console.log(aUser);


//+++++++++++++++++++++++++++++++++++++++++++++

//there are 2 types to declair object

//type 1
// let user1Object = new Object()
// console.log(type1Object);


//type2.1
let user2Object = {}

user2Object.id = "123abc"
user2Object.name = "Raza"
user2Object.isLoggedIn = false

// console.log(user2Object);

//if U want keys only
// console.log(Object.keys(user2Object));

//if U want values only
// console.log(Object.values(user2Object));

//if U want both keys and values 
// console.log(Object.entries(user2Object));

//if we R printing some thing that doesn't exist it will crash, to avoid this situation U can search it
//but it must be search as it is
// console.log(user2Object.hasOwnProperty("isLoggedIn"));
//if a single letter missed it will ans in false 
// console.log(user2Object.hasOwnProperty("isLogged"));

//type2.2
let regularUser = {
    email : "mohammadraza99@gmail.com",
    username: {
        fullname: {
            firstname: "Mohammad Raza",
            Lastname: 'Shaikh'
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.username);
// console.log(regularUser.username.fullname);
// console.log(regularUser.username.fullname.Lastname);


// there are 2 types to merge object

//merge object type1 (unprofessional)
let obj1 = { a:3, b:2}
let obj2 = { c:9, d:5}
// let obj3 = {obj1, obj2}
//print type1
// console.log(obj3);
//print type2
// console.log(obj3 = {obj1, obj2})

//merge object type2 (simple)
//print type1
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);
//print type2
// console.log(obj3 = Object.assign(obj1, obj2))

//merge object type2.2 (professional)
//print type1
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);
//print type2
// console.log(obj3 = Object.assign({}, obj1, obj2))

//merge object type3 (simple + professional)
//print type1
// let obj3 = {...obj1, ...obj2}
// console.log(obj3);
//print type2
// console.log(obj3 = {...obj1, ...obj2})

//when the data comes from database it comes objects in array
let objInArr = [
    {
        id: 1,
        name: 'abc'
    },
    {
        id: 2,
        name: 'xyz'
    },
    {
        id: 3,
        name: 'pqr'
    },
    {
        id: 5,
        name: 'aeiou'
    },
]
// console.log(objInArr);
// console.log(objInArr[1]);
// console.log(objInArr[3].name);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//type1 (simple way to )
let course = {
    coursename: "javaScript",
    price: '382',
    courseInstructor:'Raza'
}
// console.log(course.price);


//type2 (object destructuring)
// let {price} = course
// console.log(price);

//type3 (object destructuring)
let {price: paisa} = course
console.log(paisa);


















