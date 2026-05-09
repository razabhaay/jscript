// don't use var specially inside the block scope

//types of scopes {}
//global scope
//block scope
//nested scope


//why we never use var inside the block scope, to see that- on var
// var b = 100
// if (true) {
//     var b = 20
//     console.log('inside block scope:', b);
// }
// console.log(b);

// var VS let

// let a = 100
// if (true) {
//     let a = 20
//     console.log('inside block scope:', a);
// }
// console.log(a);



// //parent function can't be abale to call child function
// function one (){
//     let name= 'raza'

//     //but child function can be abale to call parent function
//     function two (){
//         let email= 'razabhaay@gmail.com'
//         console.log(name);
//     }
//     //ex. parent function-one is failed to call child funcion -email
//     // console.log(email);
    
//     //ex. child function-two is calling parent funcion -name
//     two()
// }
// one()



// if (true) {
//     let username = 'raza'
//     if (username === 'raza') {
//         let email = 'razabhaay@gmail.com'
//         console.log(username + email);
//     }
//     // can't be access or print outside the scope
//     console.log(email);   
// }
// // can't be access or print outside the scope
// console.log(username);


//++++++++++++++++++++++++++

//two types of common functions 


// // type1 direct function declaired
// function addone (num){
//     return num + 1
// }
// console.log(addone(5));


// //type1 direct function declaired can be run opposite way
// console.log(addone(5));
// function addone (num){
//     return num + 1
// }


// //type2 function declaired in any variable can't be run opposite way
// console.log(addtwo(5));
// let addtwo = function (num) {
//     return num + 2
// }


// //type2 function declaired in any variable 
// let add2two = function (num) {
//     return num + 2
// }
// console.log(addtwo(5));