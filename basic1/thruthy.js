//thruthy falsy means to making costomized true or false value

let userEmail = 'razabhaay@gmail.com' 

if (userEmail){
    console.log('email enter:', true);
}
else{
    console.log('email not enter:', false);
}



//some falsy vaues
// false, -0, 0, BigInt 0n, "", null, undefined, NaN

//some thuthy values
// '0', 'false', " ", [], {}, function (){}



if (userEmail.length === 0){
    console.log('Object is empty');
}


let emptyObj = {}

if (Object.keys(emptyObj).length ===0){
    console.log('Object is empty');
}