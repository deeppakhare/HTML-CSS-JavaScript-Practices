// 1. Write a function sayHello() that prints "Hello World" to the console.

// function sayHello() {
//     console.log(`Hello WORLD`)
// }
// sayHello()

// 2. Create a function addNumbers(a, b) that returns the sum of two numbers.

// function addNumbers(a, b) {
//     return a + b ;
// }
// console.log(addNumbers(2, 4));

//  3. Call the function with "3" and 4. What result do you get? Why?


// function addNumbers(a, b) {
//     return a + b ;
// }
// console.log(addNumbers("3", 4));

// it print 34 because we wrote 3 string format so it ptint 3 as string and 4 as number


// 4. Write a function multiplyThree(num1, num2, num3) that multiplies three numbers and returns the result.

// function multiplyThree(num1, num2, num3) {  
//     const multy = num1 * num2 * num3
//     return multy
// }
// console.log(multiplyThree(1, 4, 7))

// 5. Create a function loginMessage(username) that returns a string like "Deep just logged in".

// function loginMessage(username) {
//     console.log(username);
// }

// loginMessage("Deep just logged in")


// 6. Modify loginMessage() to check: if no username is passed, return "Guest logged in".

// function loginMessage(username = "Guest") {
//     return `${username} just logged in`
// }

// console.log(loginMessage());

// 7. Create a function calculateTotalPrice(...prices) using rest parameters that returns the sum of all given prices.

// function calculateTotalPrice(...prices) {
//     const total = prices.reduce((acc, curr) => acc + curr, 0);
//     return total;
// }
// console.log(calculateTotalPrice(200, 300, 4000, 500));


// 8. Create a function printUserDetails(user) that prints the user’s name and age from an object.
// Example input:
// { name: "Deep", age: 22 }

// const detail = {
//     name: "Deep",
//     age: 22
// }

// function printUserDetails(user) {
//     console.log(`User ${user.name} is ${user.age} year old`)
// }
// printUserDetails(detail)

// 9. Call printUserDetails() directly with an object literal instead of creating a variable first.



// function printUserDetails(user) {
//     console.log(`User ${user.name} is ${user.age} year old`)
// }
// printUserDetails(user = {
//     name: "Deep",
//     age: 22
// })


// 10. Write a function getThirdValue(arr) that returns the 3rd element from any array passed to it.

// function getThirdValue() {
//     const arry = [1,2,3,4,5]
//     return arry[3]
// }
// console.log(getThirdValue());


// 11. Demonstrate the scope difference between var, let, and const inside a function and an if block.



// 12. Create a nested function example:
// Outer function defines username = "Deep".
// Inner function prints username.
// Call inner from outer.

// function outer() {
//     const username = "Deep"
//     function inner() {
//         console.log(username)
//     }
//     inner()
// }
// outer()


// 13. Write a function that demonstrates lexical scoping (a function accessing a variable from its parent scope).

// function parent() {
//   const message = "Lexical Scope!";
//   function child() {
//     console.log(message);
//   }
//   return child;
// }
// const fn = parent();
// fn(); 


// 14. Explain and code what happens when you call a function before it is declared (hoisting).
// // Example:
// console.log(add(3,4));
// function add(a,b){ return a+b; }

// 15. Create a function expression assigned to a variable addTwo and call it after the definition.

// const addTwo = function(a, b) {
//   return a + b;
// };
// console.log(addTwo(5, 3)); 


//16. Create another function expression assigned to addThree and call it before it is defined. What happens? Why?

// console.log(addThree(9, 1))
// const addThree = function(c, d) {
//     return c - d;
// }

// 17. Write an arrow function multiply = (a, b) => a * b and log its result for (3, 5).

// const arrow = multiply = (a, b) => a*b

// console.log(multiply(3,5));


// 18. Write an arrow function getUser = () => ({ name: "Deep", age: 22 }).What happens if you remove the parentheses around {}?

// const getUser = () => ({
//     name: "Deep",
//     age: 22
// })
// console.log(getUser());


// 19. Create an object:
// const user = {
//   username: "Deep",
//   welcomeMessage() {
//     console.log(`${this.username}, welcome to website`);
//   }
// };
// Call user.welcomeMessage().
// Then change user.username = "Sam" and call it again.
// Explain what this refers to here.


// const user = {
//   username: "Deep",
//   welcomeMessage() {
//     console.log(`${this.username}, welcome to website`);
//   }
// };
// user.username = "Sam"
// console.log(user.welcomeMessage());


// 20. Create and immediately invoke an IIFE (Immediately Invoked Function Expression) that prints "Welcome, user!".
// Then, make another IIFE that takes a parameter (like age) and prints "User is 22 years old". 


(function hello() {
    console.log(`Welcome user !`)
})();

( (num) => {
console.log(`user is ${num} years old`);
}
)(33);