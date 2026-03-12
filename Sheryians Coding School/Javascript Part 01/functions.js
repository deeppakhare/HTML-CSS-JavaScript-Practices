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

// 🟡 Level 2 — Functions with Loops

// Write a function that prints numbers from 1 to n.
// function printNumbers(n){
//     for(let i = 1; i <= n; i++){
//         console.log(i)
//     }
// }
// printNumbers(10);

//          OR

// let printNumbers = (num) => {
//     for(let i = 1; i <= num ;i++) {
//         console.log(i);
//     }
// }
// printNumbers(10);

// Write a function that prints multiplication table of a number.
// function table(num){
//     for(let i = 1; i <= 10; i++){
//         console.log(`${5} X ${i} = ${i*num}`);
//     }
// }
// table(2);

// Write a function that returns sum of numbers from 1 to n.
// let sumOfNumbers = (num) => {
//     let sum = 0;
//     for(i = 1; i <= num; i++){
//         sum = sum + i;
//     }
//     console.log(sum);
// }
// sumOfNumbers(10);

// Write a function that returns Fibonacci series up to n terms.
// function fibonacci(num) {
//     let a = 0;
//     let b = 1;
//     console.log(a);
//     console.log(b);
//     for(let i = 1; i <= num; i++){
//         let c = a + b;
//         console.log(c);
//         a = b;
//         b = c;
//     }
// }
// fibonacci(5);

// Write a function that checks if a number is prime.
// function prime(num){
//     let isPrime = true;
//     for(let i = 2; i < num; i++){
//         if(num % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime && num > 1){
//         console.log(`${num} is prime number`)
//     } else {
//         console.log(`${num} is not prime number`)
//     }
// }
// prime(20);

// Level 3 — Functions with Arrays

// Write a function that returns the largest number in an array.
// function largestNumber(arr){
//     let largest = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     console.log(`${largest} is largest number`);

// }
// largestNumber([244, 34, 22, 506, 12, 78, 222]);

// Write a function that returns the smallest number in an array.
// function smallestNumber(arr){
//     let smallest = arr[0];
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i] < smallest){
//             smallest = arr[i];
//         }
//     }
//     console.log(smallest);

// }
// smallestNumber([244, 34, 2, 506, 12, 78, 222]);

// Write a function that calculates the sum of array elements.
// function sumOfArray(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     console.log(sum);

// }
// sumOfArray([2, 9, 4, 3, 5, 1, 6]);

// Write a function that counts how many even numbers are in an array.
// function evenNumber(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0){
//             count++;
//         }
//     }
//     console.log(count);

// }
// evenNumber([2, 9, 4, 3, 5, 1, 6, 7, 8]);

// Write a function that removes duplicate elements from an array.
// function duplicates(arr) {
//   let arr2 = [];
//   for (let i = 0; i <= arr.length; i++) {
//     let found = false;
//     for (let j = 0; j <= arr2.length; j++) {
//       if (arr[i] === arr2[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       arr2.push(arr[i]);
//     }
//   }
//   console.log(arr2);
// }
// duplicates([2, 6, 4, 3, 2, 1, 6, 3, 7]);
