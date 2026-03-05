// let marks = 75;

// let result = marks >= 90 ? "Excellent" : marks >= 70 ? "Good" : marks >= 40 ? "Average" : "Fail"

// console.log("Result is : " + result);


// function calc(a, b, operator) {
//     let result;

//     switch (operator) {
//         case '+':
//             result = a + b;
//             break;
//         case '-':
//             result = a - b;
//             break;
//         case '*':
//             result = a * b;
//             break;
//         case '/':
//             if (b === 0) {
//                 result = "Invalid"
//             } else {
//                 result = a / b;
//             }
//             break;
//         default:
//             "Invalid"
//             break;
//     }
//     return result
// }

// console.log(calc(2, 0, '/'));


// Write a function getGrade(score) that: 
// - Takes a students marks (0 to 100)\
//  - Returns the grade based on this logic :

// function getGrade(score) {
//     let marks = score;

//     if (marks >= 90 && marks <= 100) {
//         console.log("Score is A +");
//     } else if (marks >= 80 && marks <= 89) {
//         console.log("Score is A");
//     } else if (marks >= 70 && marks <= 79) {
//         console.log("Score is B");
//     } else if (marks >= 60 && marks <= 69) {
//         console.log("Score is C");
//     } else if (marks >= 33 && marks <= 59) {
//         console.log("Score is D");
//     } else if (marks >= 0 && marks <= 32) {
//         console.log("Score is Fail");
//     } else {
//         console.log("Invalid marks");
//     }
// }
//     console.log(getGrade(89));


// function getGrade(score) {
//     if (score >= 90 && score <= 100) return "A+"
//     if (score >= 80 && score <= 89) return "A"
//     if (score >= 70 && score <= 79) return "B"
//     if (score >= 60 && score <= 69) return "C"
//     if (score >= 33 && score <= 59) return "D"
//     if (score >= 0 && score <= 32) return "Fail"
//     return "Invalid marks"
// }

// console.log(getGrade(99));



// *********  Rock - Paper - Seasor Logic  ***************

// function rps(userTerm, computerTerm) {
//     // if (userTerm === "rock" && computerTerm === "seasor") return "User win"
//     // if (userTerm === "rock" && computerTerm === "paper") return "Computer win"
//     // if (userTerm === "rock" && computerTerm === "rock") return "Tie match"
//     // if (userTerm === "paper" && computerTerm === "paper") return "Tie match"
//     // if (userTerm === "paper" && computerTerm === "seasor") return "Computer win"
//     // if (userTerm === "paper" && computerTerm === "rock") return "User win"
//     // if (userTerm === "seasor" && computerTerm === "rock") return "Computer win"
//     // if (userTerm === "seasor" && computerTerm === "paper") return "User win"
//     // if (userTerm === "seasor" && computerTerm === "seasor") return "Tie"
//     // return "check input"


//     if (userTerm === computerTerm ) return "Tie"

//     if (userTerm === "rock" && computerTerm === "seasor") return "User win";
//     if (userTerm === "paper" && computerTerm === "rock") return "User win";
//     if (userTerm === "seasor" && computerTerm === "paper") return "User win"
//     return "Computer win"
// }

// console.log(rps("rock", "paper"));



//   ************* for loop ************

// 1-100 print
//  for loop ->
// for (let i = 1; i <= 100; i++) {
//     console.log(i);    
// }

// while loop ->
// let i = 1;
// while (i <= 30) {
//     console.log(i);
//     i++;
// }


// do while loop
// let i = 13;
// do {
//     console.log(i);
//     i++;
// }
// while(i <= 45)


// break 
// for (let i = 1; i < 101; i++) {
//     console.log(i);
//     if (i === 32) {
//         break;
//     }
// }

// continue
// for (let i = 1; i < 20; i++) {
//     if (i === 12) {
//         continue;
//     }
//     console.log(i);
// }

// Q. print numbers from 10 to 1 using while 
// for(let i = 10;i >= 1; i--) {
//     console.log(i);
// }

// let i = 10;
// while(i >= 1) {
//     console.log(i);
//     i--;
// }


// Q Print even number from 1 to 20 using for loop
// for (let i = 1; i <= 20; i ++) {
//     if (i%2 == 0) {
//         console.log(i);
//     }  
// }

// let i = 1;
// while(i <= 20){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }


//  Q. print odd numbers from 1 to 15 usind while loop
// let i = 0;
// while (i <= 15) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     i++
// }

// for (let i = 0; i <= 15;i ++){
//     if( i%2 == 1) {
//         console.log(i);
//     }
// }

// Q. print table of 5
// for (let i = 1; i <= 10; i ++) {
//     let j = 5;    
//     // let c = i * j;
//     console.log(`${j} X ${i} = ${i * j}`);
// }

// Q. find sum of numbers from 1 to 100 using loop
// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
// let i = 1;
// while(i <= 100){
//     sum = sum + i;
//     i++;
// }
// console.log(sum);

// Q. print all numbers between 1 to 50 that are divisible by 3;
// for (let i = 1; i <= 50; i++) {
//     if(i % 3 == 0) {
//         console.log(i);
//     }
// }

//  Q. Ask user for a number and print 
// whether each number from 1 to that 
// number is even or odd

// let val = prompt("give a number");

// for(i = 1;i <= val; i++) {
//     if(i % 2 === 0) {
//         console.log(`${i} is even number`)
//     } else {
//         console.log(`${i} is odd number`)
//     }
// }


// Q. Count how many numbers between 1 to 100
// divisible by both 3 and 5

// for(let i = 1;i <= 100;i++) {
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i)
//     }
// }


// Q.1. Stop at First Multiple of 7
// Write a loop from 1 to 100 that:
// -- Prints each number
// -- Stops completely when it finds the first number divisible by 7

// for(let i = 1; i <= 100; i++) {
//     console.log(i);
//     if(i % 7 === 0){
//         break;
//     }
// }


// Q.2. Skip Multiple of 3
// Write a loop from 1 to 20 that:
// -- Skips number divisible by 3
// -- Prints all numbers

// for(let i = 0; i <= 20; i++) {
//     if(i % 3 === 0){
//         continue;
//     }
//     console.log(i);
// }


// Q.5 Print First 5 odd numbers only 
// write loop from 1 to 100

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//         count ++;
//         console.log(i);
//     }
//     if (count === 5) break;
// }


// Reverse the string using loop
// Using for ... of loop

// let str = "Hopper"
// let reverse = ""
// for (let ch of str) {
//     reverse = ch + reverse;
// }
// console.log(reverse);


// let firstName = "STEVE";
// let reversed = ""
// for(let val of firstName){
//     reversed = val + reversed;
// }
// console.log(reversed);



// Sum of all numbers in an array
// let nums = [20, 13, 42];
// let sum = 0;
// nums.forEach((num) => {
//     console.log(num);
//     sum = sum + num;
// })
// console.log(sum);


// Print all characters of a name using for of
// for(let name of "Maxwell"){
//     console.log(name);
// } 

// Print all object keys and values using for-in
// let user = {firstName: "Deep",lastName: "Pakhare"}
// for (let key in user) {
//     console.log(`Object key is:- '${key}' and value is:- '${user[key]}'`);
// }

// Guess number game - use while to ask until correct
// let number = 6;
// let guess = null;

// while(guess !== number) {
//     guess = Number(prompt("Guess number in between 1 to 10"));
//     if(guess === number){
//         alert("It is correct");
//     } else {
//         alert("It is wrong");
//     }
// }

// let number = 8;
// let guess = null;
// while(guess !== number) {
//     guess = Number(prompt("Guess number in between 1 to 10"));
//     if(guess === number) {
//         alert("You are correct")
//     } else {
//         alert("Try again")
//     }
// }


// Print the trangle pattern using *
// let rows = 5;
// for(let i = 1;i <= rows; i++) {
//     let star = "";

//     for(let j = 1;j <= i; j++){
//         star = star + "*";
//     }
//     console.log(star);
// }


// let rows = 5;
// for(let i = 1;i <= rows; i++) {
//     let space = "";
//     let star = "";

//     for(let j = 1;j <= rows - i; j++){
//         space = space + " ";
//     }

//     for(let k = 1; k <= i; k++){
//         star += "*";
//     }
//     console.log(space + star);

// }




// Sum of even numbers in an array using forEach
// let arr = [2, 3, 7, 4, 10, 11, 22];
// let sum = 0;
// arr.forEach((num) => {
//     if(num % 2 === 0){
//         sum = sum + num;
//     }
// })
// console.log(sum);

// let arr = [2, 3, 5, 6, 8, 9];
// let sum = 0;
// arr.forEach((num) => {
//     if(num % 2 === 0) return sum = num + sum;
// })
// console.log(sum);


// Print numbers from 100 to 1
// for(let i = 10;i >= 1;i--){
//     console.log(i);
// }


// Print sum of numbers from 1 to 100
// let sum = 0;
// for(let i = 1;i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// Print multiplication table of 2
// let mul = 9898345
// for(let i = 1; i <= 10; i++){
//     console.log(`${mul} X ${i} = ${i*mul}`);
// }


// find factorial of number
// 5 X 4 X 3 X 2 X 1 = 120
// let fact = 1;
// for(let i = 5; i >= 1; i--){
//     fact = fact * i;
// }
// console.log(fact);


// reverse a number 12345
// let num = 12345;
// let reverse = 0;
// while (num > 0) {
//     let lastDigit = num % 10;

//     reverse = 10 * reverse + lastDigit;

//     num = Math.floor(num / 10);
// }
// console.log(reverse);



// Count digits in a number
// let num = 4332222222222;
// let count = 0;
// while(num > 0) {
//     count ++;
//     num = Math.floor(num / 10);
// }
// console.log(count);


// let number = 2345666;
// let count = 0;
// while(number > 0) {
//     count++;
//     number = Math.floor(number / 10)

// }
// console.log(count);



// Print number trangle
// let rows = 5;
// for(let i = 0; i <= rows; i++) {
//     let space = "";
//     for(let j = 0;j <= i; j++){
//         space = space + "*";  // + j
//     }
//     console.log(space);
// }

// let rows = 5
// for(let i = 1; i <= rows; i++){
//     let space = "";
//     for (let j = 1; j <= i; j++){
//         space = space + j // + "*"
//     }
//     console.log(space);
// }


// Check the palindrome number
// Palindrome number mhanje jya number la reversed kelya var te original number sarkha diste;
// let originalNumber = 1213
// let num = originalNumber;
// let reversed = 0;
// while(num > 0){
//     let lastDigit = num % 10;

//     reversed = 10 * reversed + lastDigit;

//     num = Math.floor(num / 10);
// } 
// if (originalNumber === reversed) {console.log(`The num ${originalNumber} is palindrome number.`);}
// else {console.log(`The number is not palindrome.`)}


// let originalNum =  223343243322;
// let num = originalNum;
// let reversed = 0;
// while(num > 0){
//     let lastDigit = num % 10;
//     reversed = 10 * reversed + lastDigit;
//     num = Math.floor(num / 10);
// }
// if(reversed === originalNum) return console.log(`It is palindrome`);
// else return console.log(`It is not palindrome`);



// find largest number in array
// let arr = [21, 33, 10 , 4, 12, 8, 10, 44];
// let largest = arr[0];
// for(let i = 1; i < arr.length; i++) {
//     if(arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// console.log(largest);



// Print febonacci series 
// let n = 8;
// let a = 0;
// let b = 1;

// console.log(a);
// console.log(b);

// for(let i = 3; i <= n; i++){
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
// }


// let n = 6;
// let a = 0;
// let b = 1;

// console.log(a);
// console.log(b);

// for(let i = 3; i <= n; i++){
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;

// }



//  Check number is prime number 
// let num = 7;
// let isPrime = true;
// for(let i = 2; i < num; i++) {
//     if(num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime && num > 1) return console.log("Is prime");
// else return console.log("not prime")

// let num = 8;
// let isPrime = true;
// for(let i = 2; i < num; i++) {
//     if(num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime && num > 1) return console.log("It is prime number");
// else console.log("It is not prime number")

// let num = 19;
// let isPrime = true;
// for(let i = 2; i < num; i++){
//     if(num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime && num > 1){
//     console.log("is prime number");

// } else {
//     console.log("is not prime");

// }

// Print prime number from 1 to 100.

// for(let num = 2; num <= 100;  num++) {
//     let isPrime = true;
//     for(let i = 2; i < num; i++) {
//         if(num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime && num > 1) {
//         console.log(`The prime numbers are ${num}`);

//     }
// }


// for(let num = 2; num <= 100; num++){
//     isPrime = true;
//     for(let i = 2;i < num; i++){
//         if(num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime && num > 1) {
//         console.log(num);
// }
// }



// find Greatest Common Divisor(GCD) of two numbers;
// let a = 12;
// let b = 18;
// let gcd = 1;
// for(let i = 0; i <= a && i <= b; i++) {
//     if(a % i === 0 && b % i === 0) {
//     gcd = i
//     }
// }
// console.log(`${gcd} is GCD of ${a} & ${b}`);


// Fing Least Common Multiple (LCM)
// let a = 12;
// let b = 18;
// let gcd = 1;
// for(let i = 0; i <= a && i <= b; i++) {
//     if(a % i === 0 && b % i === 0) {
//         gcd = i;
//     }

// }
// console.log(`GCD is ${gcd}`);
// let lcm = (a * b) / gcd;
// console.log(`LCM of given two numbers is ${lcm}`);



