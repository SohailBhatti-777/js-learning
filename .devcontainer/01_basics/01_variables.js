const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "jaipur";
// in JavaScript you can declare variable w.o using keyword const, let, var. But it is not a good practice!
let accountState;

// accountId = 2;
accountEmail = "hc@hc.com";
accountPassword = "212121";
accountCity = "Bengaluru";

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
