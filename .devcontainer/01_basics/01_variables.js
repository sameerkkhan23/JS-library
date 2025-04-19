const accountId = 1265
let accountEmail = "abs@gmail.com"
var accountPassword = "2223"
accountCity = "delhi"
let accountState;




// accountId = 2255   // not allowed
accountEmail = "ddd@gmail.com"
accountPassword = "1111"
accountCity = "faridabad"


console.log(accountId);

/*
perfer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])

