//function type 1

// function myName () 
// {
//     console.log("R");
//     console.log("a");
//     console.log("z");
//     console.log("a");
// }
//function call
// myName()


//function type2
//defining function means parameters
// function add2Num (num1, num2) {
//     console.log(num1+num2);
// }
//function call means arguments
// add2Num(2, 3)


//function type3
//defining function means parameters
// function add2Num (num1, num2) {
//     return num1+num2
//     // console.log(num1+num2);
// }
//function call means arguments
// console.log(add2Num(2, 3))


//function type3.1
//defining function means parameters
// function add2Num (num1, num2) {
//     let result = num1+num2

    //any function before return will be working 
    // console.log('Raza');
    // return result
    //any function before return will not be working 
//     console.log('bhaay');
// }
//function call means arguments
// let result = add2Num(5,5)
// console.log('Result:', result);


//function type4
// function msgAftrLogin(username) {
//     return `${username} just logged in`
// }
// console.log(msgAftrLogin('Raza,'))


//function type5
// function msgAftrLogin(username = "unknown") {
//     if(username === undefined){
//         console.log('Please ender username');
//         return
//     }
//     return `${username} just logged in`
// }
//if user login by entering the name then the entered name will be shown
// console.log(msgAftrLogin('Raza,'))
//if user login without entering the name, it will show default username that is unknown
// console.log(msgAftrLogin())


//function type 5.1
// function msgAftrLogin(username = 'unknown') {
//     if(!username){
//         console.log('Please ender username');
//         return
//     }
//     return `${username} just logged in`
// }
//if user login by entering the name then the entered name will be shown
// console.log(msgAftrLogin('Raza,'))
//if user login without entering the name, it will show default username that is unknown
// console.log(msgAftrLogin())


//if U run this function it will only print first value 
//function type0.6
// function oneFuncMultiValue(num1){
//     return num1
// }
// console.log(oneFuncMultiValue(100,200,300, 400, 500, 600, 700));

//function type6
// function oneFuncMultiValue(...num1){
//     return num1
// }
// console.log(oneFuncMultiValue(100,200,300, 400, 500, 600, 700));


//function type6.1
//here Value1 takes 100, Value2 takes 200, remaining takes ...num1
// function oneFuncMultiValue(Value1, Value2, ...num1){
//     return num1
// }
// console.log(oneFuncMultiValue(100,200,300, 400, 500, 600, 700));


//function type7 
// let sell = {
//     product: "cooler",
//     price: '3499'
// }

// function handleObject (anyObject) {
//     console.log(`product name is ${anyObject.product} and the price is ${anyObject.price}`);
// }

// handleObject(sell)


//function type7.1
// let sell = {
//     product: "cooler",
//     price: 3499
// }

// function handleObject (anyObject) {
//     console.log(`product name is ${anyObject.product} and the price is ${anyObject.price}`);
// }

// handleObject(
//     {
//         product: 'AC',
//         price: 12499
//     }
// )


//function type8
// let myNewArray = [300,199,944,422]

// function returnThirdValue (getThirdArr) {
//     return getThirdArr[2]
// }
// console.log(returnThirdValue(myNewArray));


//function type8.1
function returnThirdValue (getThirdArr) {
    return getThirdArr[2]
}
console.log(returnThirdValue([244, 522, 844, 265]));