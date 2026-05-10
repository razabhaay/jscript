// // <, >, <=, >=, ==, !=, ===, !==

// // if else
// // if else uses boolean value directly and also indirectly

// //if else direct boolean values - true and false

// //true
// if (true) {
//     console.log('true:', 'executed');
// } else {
//     console.log('true:', 'not executed');
// }

// //false
// if (false) {
//     console.log('false:', 'not executed');
// } else {
//     console.log('false:', 'executed');
// }


// //if else indirect boolean values 
// // indirect true- 4>2, 2<4, 4>=2, 2<=4, 2==2, 2=='2', 4!=2, 4===4, '4'==='4', 2!==4, false==0, false=="", 0==""
// // indirect false- 4<2, 2>4, 4<=2, 2>=4, 4==2, 4=='2', 2!=2, 2===4, 4==='4', 4!==4

// //indirect true boolean values 
// //ex.1
// if (2==2) {
//     console.log('true:', 'executed');
// } else {
//     console.log('true:', 'not executed');
// }

// //ex.2
// //here double equal to == only checks value not checks type like number and string because values are equal thats why it is true
// if (2=='2') {
//     console.log('true:', 'executed');
// } else {
//     console.log('true:', 'not executed');
// }


// //indirect false boolean values 
// //ex.1
// if (2!=2) {
//     console.log('false:', 'not executed');
// } else {
//     console.log('false:', 'executed');
// }

// //ex.2
// //here tripple equal to === checks value and type both like number and string because values are equal but the types are different thats why it is false
// if (2==='2') {
//     console.log('false:', 'not executed');
// } else {
//     console.log('false:', 'executed');
// }



// //normal if else execution
// let temperature = 30
// if (temperature <= 29){
//     console.log('temperature is going low');
// }else{
//     console.log('temperature is going high...');
// }


// //single line implicit if else execution but cemecoln ; is must
// let temperature = 20
// if (temperature <= 29) console.log('temperature is going low');
// else console.log('temperature is going high...');


// //multiple conditions ko sath me check karne ke liye && ka use kare, && this is called as AND 
// //&& iska mtlb sare conditions ka true hona zaruri hai 1 bhi condition false hui to execute nahi hoga
// let userLoggedIn = true
// let debitCard = true
// if (userLoggedIn && debitCard){
//     console.log('user can buy online course');
// }


// //multiple conditions ko sath me check karne ke liye || ka use kare, || this is called as OR
// // || iska mtlb sare conditions ka true hona zaruri nhi 1 bhi condition true hui to execute hoga
// let loggedInFromEmail = false
// let loggedInFromGoogle = true
// if (userLoggedIn || debitCard){
//     console.log('user logged in');
// }


//Terniary Operator
//condition ? true : false

let iceCreamPrice = 70
iceCreamPrice >= 80 ? console.log('iceCream have no discount') : console.log('iceCream have a discount');






//++++++++++++++++++++++++++

// this operator is use for backup on backend to database connection and also use in firebase, supabase, appwrite
// Nullish Coalescing Operator (??): null undefined
// Nullish is also called as flag value that convert all undefined values and null values to a particular value that we give intead of ndefined and null because it is wrong practice to have null or undefined values in your software

// let val1;
// val1 = 4 ?? 10
// console.log(val1);

// let val2;
// val2 = null ?? 10
// console.log(val2);

// let val3;
// val3 = undefined ?? null ?? 8
// console.log(val3);

// let val4;
// val4 = null ?? 4 ?? 10
// console.log(val4);
