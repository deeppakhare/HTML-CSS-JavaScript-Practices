// 🟢 Basic Level (1–7)

// 1. Write an if condition to check if a user is logged in (userLoggedIn = true) and has a debit card. If both are true, print "Payment allowed".

// let userLoggedIn = true
// let debitCard = true

// if (userLoggedIn == true && debitCard == true) {
//     console.log(`User has Payment Allowed`)
// }

// 2.Modify the above code so that it only prints "Payment allowed" when the user is logged in and the debit card is not expired.

// let userLoggedIn = true
// let debitCard = true
// let notExpired = false

// if (userLoggedIn && debitCard && !notExpired) {
//     console.log(`User has Payment Allowed`)
// }
// 3.Create two variables loggedInFromGoogle and loggedInFromEmail. If either is true, print "User logged in".

// const loggedInFromGoogle = true
// const loggedInFromEmail = true
// if (loggedInFromEmail || loggedInFromGoogle) {
//     console.log(`User Logged in`)
// }

// 4.Write a program that checks if a number is positive, negative, or zero using if / else if / else.

// let num = 0
// if (num > 0) {
//     console.log(`It is Positive`);
// } else if (num < 0){
//     console.log(`It is negative`);
// } else {
//     console.log(`It is zero`)
// }

// 5.Use a switch statement to print the name of the month based on its number (1–12).

// let month = 51
// switch (month) {
//     case 1:
//         console.log("Jan")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("mar")
//         break;
//     case 4:
//         console.log("aprl")
//         break;
//     case 5:
//         console.log("may")
//         break;
//     case 6:
//         console.log("jun")
//         break;
//     case 7:
//         console.log("july")
//         break;
//     case 8:
//         console.log("aug")
//         break;
//     case 9:
//         console.log("sep")
//         break;
//     case 10:
//         console.log("oct")
//         break;
//     case 11:
//         console.log("nov")
//         break;
//     case 12:
//         console.log("dec")
//         break;

//     default:
//         console.log(`Default input`)
//         break;
// }

// 6.Write a switch statement that takes a day number (0–6) and prints the corresponding day name.

// const dayNo = 0
// switch (dayNo) {
//     case 0:
//         console.log(`Its Sunday`)
//         break;
//     case 1:
//         console.log(`Its Monday`)
//         break;
//     case 2:
//         console.log(`Its Tuesday`)
//         break;
//     case 3:
//         console.log(`Its Wednesday`)
//         break;
//     case 4:
//         console.log(`Its Thrusday`)
//         break;
//     case 5:
//         console.log(`Its Friday`)
//         break;
//     case 6:
//         console.log(`Its Saturday`)
//         break;

//     default:
//         console.log(`Default input`)
//         break;
// }

// 7.Use if statements to print "Even" if a number is even, otherwise print "Odd".

// let num = 0
// if (num % 2 == 0) {
//     console.log(`It is Even Number`)
// } else if (num % 2 != 0) {
//     console.log(`it is odd number`)
// } else {
//     console.log(`invalid input`)
// }

// 🟡 Intermediate Level (8–14)

// 8.Given const userEmail = "", check if the user has provided an email. If not, print "No email provided".

// const userEmail = "deep@gmail"
// if (userEmail) {
//     console.log(`Email Provided`)
// } else {
//     console.log(`No email provided`)
// }

// 9.List all the falsy values in JavaScript and write a code snippet that prints only the truthy values from this array: const values = [0, 1, "", "Hello", null, undefined, "0", [], {}];

// ---------------- falsy values ------------------------------
// false, 0, -0, undefined, NaN, "", null, BigInt on

// const values = [0, 1, "", "Hello", null, undefined, "0", [], {}];
// const truthy = values.filter(Boolean);
// console.log(truthy);


// 10.Write a condition that checks whether an object or an array is truthy or falsy in an if statement.

// if ({}) console.log("Object is truthy");
// if ([]) console.log("Array is truthy");


// 11.Use the Nullish Coalescing Operator (??) to assign a default value of "Guest" when a variable username is null or undefined.

// const userName = null ?? undefined ?? "Guest"
// console.log(userName);


// 12.Explain the difference between || (OR) and ?? (Nullish Coalescing) with a short code example.

// console.log(0 || "Default");   
// console.log(0 ?? "Default");   

// || treats falsy values (like 0, "") as false.
// ?? only checks for null or undefined.


// 13.Use ?? to return the first non-null/undefined value from this chain:
// const val = "Default" ?? null ?? undefined ;
// console.log(val);



// 14.Write a ternary operator that prints "Adult" if age >= 18, otherwise prints "Minor".

// const age = 11
// age >= 18 ? console.log(`Adult`) : console.log(`Minor`);


// 🔵 Advanced Level (15–20)

// 15.Write a ternary expression that checks if the iceTeaPrice is less than or equal to 80, and prints "Affordable" or "Expensive".

// const iceTeaPrice = 40
// iceTeaPrice <= 80 ? console.log("Affordable") : console.log("Expencive");

// 16.Combine && and || in one statement:
// If isLoggedIn && hasCard, print "Access Granted".
// Otherwise, if isLoggedIn || hasGuestPass, print "Limited Access".
// Else print "No Access".

// const isLoggedIn = false;
// const hasCard = false;
// const hasGuestPass = true;

// if (isLoggedIn && hasCard) {
//   console.log("Access Granted");
// } else if (isLoggedIn || hasGuestPass) {
//   console.log("Limited Access");
// } else {
//   console.log("No Access");
// }


// 17.Use a switch statement to print "Weekend" for days 0 (Sunday) and 6 (Saturday), and "Weekday" for others.

// const dayNo = 6
// switch (dayNo) {
//     case 0:
//         console.log(`Its Sunday`)
//         break;
//     case 1:
//         console.log(`Its Monday`)
//         break;
//     case 2:
//         console.log(`Its Tuesday`)
//         break;
//     case 3:
//         console.log(`Its Wednesday`)
//         break;
//     case 4:
//         console.log(`Its Thrusday`)
//         break;
//     case 5:
//         console.log(`Its Friday`)
//         break;
//     case 6:
//         console.log(`Its Saturday`)
//         break;

//     default:
//         console.log(`Weekend`)
//         break;
// }

// 18.Write a function checkDiscount(price) that uses a ternary operator:
// If price > 500, return "Eligible for discount".
// Else return "No discount".

// function checkDiscount(price) {
//     price > 500 ? console.log(`Eligible for discount`) : console.log(`not discount`)
// }
// checkDiscount(300)


// 19.Use a mix of ??, ||, and && to safely get a user’s name from nested variables:
const user = {
  profile: { name: null }
};
const name = user?.profile?.name ?? "Anonymous";
console.log(name);
// (Question: What will this print and why?)



// 20.Write a code snippet that shows the difference between == and === by comparing:

console.log(0 == false);
console.log(0 === false);