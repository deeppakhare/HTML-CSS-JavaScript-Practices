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
let name = "deep"
for(let i = 0; i <= ){
    
}