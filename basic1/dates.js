let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2026, 4, 1)
// console.log(myCreatedDate.toDateString());

myCreatedDate = new Date(2026, 4, 1, 4, 17, 32)
// console.log(myCreatedDate.toLocaleString());

let Datee = new Date ("2026-03-23")
// console.log(Datee.toLocaleString());

let Daate = new Date ("01-14-2026")
// console.log(Daate.toLocaleString());

//getTime is use to get milli second from the date
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Daate.getTime());

//divide by 1000 to get second from the date
// console.log(Date.now()/1000)
// to remove numbers after the point 
// console.log(Math.floor(Date.now()/1000))

// newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`${newDate.getDay(myDate)} Date is best and this time is best`)

// console.log(newDate.toLocaleString('default', {
    // weekday: "long",
    // timeZone: ''
// }))