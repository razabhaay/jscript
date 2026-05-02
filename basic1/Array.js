// array

//2 types to declair array

//type 1
let ArrInNumber = [5, 4, 3, 2, 2, 1]
const ArrInString = [" Mohammad"," Raza"]

//type 2
ArrInMix = new Array (1, 2, 3, "Mohammad", "Raza", true)

// console.log(ArrInNumber);
// console.log(ArrInNumber[1]);
// console.log(ArrInString);
// console.log(ArrInString [1]);
// console.log(ArrInMix);
// console.log(ArrInMix[2]);


//Array methods

//to add value in the last
ArrInNumber.push(7)
// console.log(ArrInNumber);

//to remove last value 
ArrInMix.pop()
// console.log(ArrInMix);

//to add value in the start
ArrInString.unshift('Salam')
// console.log(ArrInString);

//to remove value in the start
ArrInMix.shift()
// console.log(ArrInMix);

//to check value exist or not - it will ans. in true/false_boolean 
// console.log(ArrInNumber. includes(9));
// console.log(ArrInNumber. includes(4));

//to check value exist or not - it will ans. in (+ -)Numbers because index contain numbers 
// console.log(ArrInNumber. indexOf(9));
// console.log(ArrInNumber. indexOf(4));

//convert Array into String by join
let ArrToString = ArrInString.join()
// console.log(ArrToString);
// console.log(typeof ArrToString);

//use slice to get a slice/peice/small-peice of data from the data and don't change/manipulate original data
const ArrInSlice = ArrInNumber.slice(1,2)
console.log(ArrInNumber);
console.log(ArrInSlice);

//use slpice to get a slice/peice/small-peice of data from the data and change/manipulate original data
const ArrInSplice = ArrInNumber.splice(1,2)
console.log(ArrInNumber);
console.log(ArrInSplice);