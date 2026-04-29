// old string type

// console.log("Hello" + " World")

let name = "Raza "
let age = 22

// console.log('Mohammad ' + name + age);



// modern string type

// console.log(`Hello My name is ${name}and My age is ${age}`);


const gameName = new String("razabhaay")

// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName[3]);
// console.log(gameName[4]);
// console.log(gameName[5]);
// console.log(gameName[6]);
// console.log(gameName[7]);
// console.log(gameName[8]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); 
// console.log(gameName.toLowerCase()); 
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('aa'));

let newString = gameName.substring(0, 4)
//substring print range but not last one means 0 position par r, 1 position par a, 2 position par z, 3 position par a, but 5 position ka b print nahi hua hai
// console.log(newString);

const otherString = gameName.slice(-7, 7)
//can print from negitive
// console.log(otherString);

newString = "  Raza "
// console.log(newString);
// console.log(newString.trim());

// by using trim method U can remove extra space given by user at the time of filling form or etc situation

// console.log(newString.trimStart());
//remove extra space from start

// console.log(newString.trimEnd());
//remove extra space from end


// const url = "https://raza.com/razashaikh"
//kabhi kabhi url k mid me ye (%20) add ho jata hai  
const url = "https://raza.com/raza%20shaikh"
//to solve this problem
// console.log(url);
console.log(url.replace('%20', '-'));

//use include method to search a word in url if yes it give else it will give false
console.log( url.includes('raza'))
console.log( url.includes('raj'))

//use split to split or divide using common symbol, alfabet, number etc
const gameNaam = new String("raza-bhaay-shaikh")
console.log(gameNaam.split('-'));



// console.log(gameName.__proto__);
// console.log(gameName.__proto__.String);
// console.log(gameName.__proto__.age);
// console.log(gameName.__proto__.console);
// console.log(gameName.__proto__.gameName);
// console.log(gameName.__proto__.log);
// console.log(gameName.__proto__.name);
// console.log(gameName.__proto__.__proto__);






