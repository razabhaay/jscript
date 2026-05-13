//for loop - most popular loop in all companies

// //simple for loop
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }


// //nested for loop or for loop with for loop
// //here we are printing tables 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`inner loop value ${i + '*' + j + '=' + i*j}`);
//     }
// }


// //for with if else and break
// for (let i = 1; i <= 20; i++) {
//     const element = i;
//     if (element == 7){
//         console.log(`${i} this number is best`);

//         //break is use to throw U outside the loop, here it is breaking after printing 7 and throwing U outside the loop
//         break
//     }
//     console.log(element);
// }


// //for with if else and continue
// for (let i = 1; i <= 20; i++) {
//     const element = i;
//     if (element == 7){
//         console.log(`${i} this number is best`);

//         //continue is use to skip one value, here it is skiping 7, U comment it to see
//         //if U don't add continue it will double print 7 because if will print 1st 7 by ${i} and for will print 2nd 7
//         continue
//     }
//     console.log(element);
// }


// //for loop with array
// let myarray = ['Abubakr', 'Umar', 'Usman', 'Ali',]
// console.log(myarray.length);
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index]; 
//     console.log(element);
// }


//+++++++++++++++
//while and do while loop

//while loop - checks the condition first then print the value

// let index = 100

// while (index <= 200) {
//     console.log(`value of index:${index}`);
//     index = index + 20
// }


// let index = 100

// while (index <= 107) {
//     console.log(`value of index:${index}`);
//     index++
// }


// //while loop with array
// let myarray = ['Abubakr', 'Umar', 'Usman', 'Ali',]
// let arr=0
// while(arr < myarray.length){
//     console.log(`value is ${myarray[arr]}`);
//     arr = arr +1
// }


// //do while loop - rarely use in companies
// // do while loop print the 1st value without checking condition and remaining will check as the condition given
// let score = 21
// do {
//     console.log(`score is:${score}`);
//     score++
// } while (score <=20)


// let score = 15
// do {
//     console.log(`score is:${score}`);
//     score++
// } while (score <=20)



//+++++++++++++++++

// forof loop
// this is specially use for Arrays like - strings in array or objects in array

// //forof on array
// let myarray = ['Abubakr', 'Umar', 'Usman', 'Ali',]

// // for (const element of object) 
// // element = toppest and object = myarray, Note here object is not an Object{}, forof object is only a name for your data like myarray is the name for this data ['Abubakr', 'Umar', 'Usman', 'Ali',]

// for (const toparr of myarray) {
//     console.log(toparr);
// }


// //forof on strings
// const greetings = 'Salaam, Razabhaay'
// for (const greet of greetings) {
//     console.log(`Each char is: ${greet}`);    
// }


// //Map
// //Map is use for unique value and ordered form

// let contries = new Map()
// contries.set('IN', 'India')
// contries.set('IQ', 'Iraq')
// contries.set('YM', 'Yaman')
// contries.set('PL', 'Palastine')

// //here we are giving india double but Map will only print once and unique 
// contries.set('IN', 'India')

// console.log(contries);


// //Map using forof with destructuring array 
// // Map can't runing in forin loop
// let contries = new Map()
// contries.set('IN', 'India')
// contries.set('IQ', 'Iraq')
// contries.set('YM', 'Yaman')
// contries.set('PL', 'Palastine')

// //destructuring array
// for (const [key, value] of contries) {
//     console.log(key,":-", value);
// }



//+++++++++++
//forin loop
// this is specially use for Objects like - strings in Object or array in Object

// // forin loop using Object
// const myobject = {
//     js: 'javascrip',
//     cpp: 'c++',
//     py: 'PyThon',
//     rb: 'ruby'
// }
// for (const key in myobject) {
//     console.log(`${key} is the shortcut of ${myobject[key]}`);
// }


// //forin loop using array
// let codlang = ['c++', 'js', 'python', 'ruby']
// for (const key in codlang) {
//     console.log(`${key} :- ${codlang[key]}`);
// }


//++++++++

//foreach loop

// let codelang = ['cpp', 'js', 'java', 'pathon']

// //type1
// codelang.forEach(function (lang) {
//     console.log(lang);
// })

// //type2
// codelang.forEach((lang) => {
//     console.log(lang);
// })

// //type3
// //callback function
// // this is mostly use for refrencing
// function printMe(lang){
//     console.log(lang);
// }
// codelang.forEach(printMe)

// //type 4
// //full use of foreach loop 
// codelang.forEach((index , lang, arr) => {
//     console.log(lang,":-", index, arr);
// })


// //using foreach U can access value of the Object in the Array 

// const myCodingArray = [
//     {
//         langName : 'Java',
//         langFileName: '.java'
//     },
//     {
//         langName : 'JavaScript',
//         langFileName: '.js'
//     },
//     {
//         langName : 'Python',
//         langFileName: '.py'
//     },
//     {
//         langName : 'c++',
//         langFileName: '.cpp'
//     }
// ]

// myCodingArray.forEach((item) => {
//     //using foreach U can access value of the Object that is stored in the Array
//     //this is use in database to astract value from hundreds of values from the object that is inside the array
//     console.log(item.langFileName,':-', item.langName );
// })