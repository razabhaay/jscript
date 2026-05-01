// to print number

const score = 100
// console.log(score);

// to convert a number into String
// console.log(score.toString());



// to print number by showing that this is number 

let scure = new Number(2000)
// console.log(scure)

// to convert a number into String
// console.log(scure.toString());

// by converting to string U can use all methods of string like
// console.log(scure.toString().length);

// for e-commerce or accounting or billing U can use toFixed method
// console.log(scure.toFixed(2));

const aNumber = 34.568
// use toPrecision to make number in round figure 
// console.log(aNumber.toPrecision(3));

usNumber = 4000000
//to make number in US form
// console.log(usNumber.toLocaleString());

indianNumber = 5000000
//to make number in US form
// console.log(indianNumber.toLocaleString('en-in'));


//++++++++++++++Maths+++++++++++++++++

console.log(Math);
//by using abs U can make negative to positive number
// console.log(Math.abs(-3));

//by using round U can make roundof or round figure
// console.log(Math.round(4.9));

//by using ceil U can make increment roundof or round figure only 
// console.log(Math.ceil(6.01));

//by using floor U can make decrement roundof or round figure only 
// console.log(Math.floor(6.99));

//by using min U can print small number
// console.log(Math.min(2,5,8,4));

//by using max U can print big number
// console.log(Math.max(2,5,8,4));

//to print random value U can use .random
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);

const min = 10
const max = 30

console.log(Math.random() * (max - min + 1) + min)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
