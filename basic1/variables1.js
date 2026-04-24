const accountId = 144553
let accountEmail = "raza@jmail.com"
var accountPassword = "12345678"
accountCity = "Mumbai"
let accountState;

// accountId = 2 //not allowed

accountEmail = "hcahc.com"
accountPassword ="2121211"
accountCity = "Bombay"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 