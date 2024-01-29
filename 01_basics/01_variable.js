const accountId = 369546
let accountEmail = "abcdef@gmail.com"
var accountPassword = "123456"
accountCity = "Patna"

//accountId = 21;  // not allowed
accountEmail = "ab@gmail.com"
accountPassword = "123"
accountCity = "Gaya"

let accountState;  // o/p will be undefined 


console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* Prefer not to use var because of issue in block scope & functional scope */