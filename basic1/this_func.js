//global object = window
//.this is the global object 

// let user = {
//     product: 'showno',
//     price: '999',

//     welcomeMessage: function () {
//         console.log(`${this.product}, welcome to website`);

//         //this will print all the data
//         // console.log(this);
//     }
// }
// // user.welcomeMessage()

// // //here we are changing the product 
// // user.product = 'levet'
// // user.welcomeMessage()

// console.log(this)


//what is inside this
// function user(){
//     console.log(this);
// }
// user()


// //this. can't be defiene in function because it shows undefiend but this. can be defiene in object easily 
// function user(){
//     let usrname = 'raza'
//     console.log(this.username);
// }
// user()


//+++++++++++++++++Arrow funcion

// //normal function
// let user = function() {
//     let usrname = 'raza'
//     console.log(this.username);
// }
// user() 

// //arrow function | difference is change - function to =>
// let user = () => {
//     let usrname = 'raza'
//     console.log(this.username);
// }
// user() 


// //basic arrow function 
// let addthree = (num1, num2, num3) => {
//     return num1 + num2 + num3
// }
// console.log(addthree(2,3,5));


// //implicit return arrow function
// //in this U don't need to give paranthisis {} and no need to write return 
// let addthree = (num1, num2, num3) => (num1 + num2 + num3)
// console.log(addthree(2,3,5));


// // if U want to use object in implicit return arrow function
// let user_details = () => ({username: 'raza'})
// console.log(user_details());


// // if U want to use array in implicit return arrow function
// let myArray = [2, 4, 5, 7, 9]

// type1
// myArray.forEach(function () {})
// // type2
// myArray.forEach(() => {})
// // type3
// myArray.forEach(() => ())



//++++++++++++++++++

// // type1 normal function
// function dbase () {
//     console.log(`db connected`);
// }
// dbase()


// // type2 IIFE function OR unnamed IIFE which don't have name 
// // () () this is IIFE - 1st perentheses (function) (execution)
// // why we use IIFE - we use IIFE to remove global pollution and to execute the function immediatly
// (function dbase () {
//     console.log(`db connected`);
// })
// ();


// // type3 IIFE + arrow function OR named IIFE which have name 
// ( (name) => {
//     console.log(`DB connected two ${name}`);
// })('raza');

//always give semicolon ; between IIFE functions

//here in normal we have to use function name ex. function chai() but in IIFE function we don't need to add function name
function chai(name) {
    console.log(`DB connected two ${name}`);
}
chai('name')