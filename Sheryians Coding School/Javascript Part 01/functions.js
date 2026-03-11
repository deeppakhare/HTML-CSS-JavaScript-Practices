// Level 1 — Basic Function Concepts

// Write a function that prints "Hello World".
// function print(){
//     console.log("Hello World");
// }
// print();

//     OR

// let print = () => {
//     return "Hello World";
// }
// console.log(print());

// Write a function that adds two numbers and returns the result.
// function result(a, b){
//     return a + b;
// }
// console.log(result(33, 45));

// Write a function that finds the square of a number.
// let square = (num) => {
//     console.log(num * num);
// }
// square(10);

// Write a function that checks if a number is even or odd.
// function even(num){
//     if (num % 2 === 0) return "It is even number"
//     else return "Not even number"
// }
// console.log(even(127));

// Write a function that returns the largest of two numbers.
// function largest(num1, num2){
//     if (num1 > num2) return `${num1} is largest number`
//     else return `${num2} is largest number`
// }
// console.log(largest(10, 22));

// Write a function that returns the largest of three numbers.
// function largest(num1, num2, num3){
//     if (num1 > num2 && num1 > num3) return `${num1} is largest number`
//     if (num2 > num1 && num2 > num3) return `${num2} is largest number`
//     if (num3 > num2 && num3 > num1) return `${num3} is largest number`
//     else return `invalid given number`
// }
// console.log(largest(100, 22, 0));

// Write a function that calculates the factorial of a number.
// function factorial(num){
//     let result = 1;
//     for(let i = 1; i <= num; i++){
//         result = result * i;
//     }
//     console.log(result);
// }
// factorial(5);

// Write a function that reverses a string.
// function reverse(string){
//     let newString = "";
//     for(let val of string){
//         newString = val + newString;
//     }
//     console.log(newString);
// }
// reverse("Deep")

// Write a function that counts vowels in a string.
// function countVowels(string) {
//     let count = 0;
//     for (let v of string) {
//         if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
//             count++;
//         }
//     }
//     console.log(`No. of vowels in the string is ${count}`);
// }
// countVowels("evrywhere");

// Write a function that checks if a string is a palindrome.
// function palindrome(string) {
//   let reverse = "";
//   for (let char of string) {
//     reverse = char + reverse;
//   }

//   console.log(reverse);

//   if (reverse === string) return console.log("String is palindrome");
//   else return console.log("the string is not palindrome");
// }
// console.log(palindrome("madam"));


