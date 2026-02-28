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

function rps(userTerm, computerTerm) {
    // if (userTerm === "rock" && computerTerm === "seasor") return "User win"
    // if (userTerm === "rock" && computerTerm === "paper") return "Computer win"
    // if (userTerm === "rock" && computerTerm === "rock") return "Tie match"
    // if (userTerm === "paper" && computerTerm === "paper") return "Tie match"
    // if (userTerm === "paper" && computerTerm === "seasor") return "Computer win"
    // if (userTerm === "paper" && computerTerm === "rock") return "User win"
    // if (userTerm === "seasor" && computerTerm === "rock") return "Computer win"
    // if (userTerm === "seasor" && computerTerm === "paper") return "User win"
    // if (userTerm === "seasor" && computerTerm === "seasor") return "Tie"
    // return "check input"


    if (userTerm === computerTerm ) return "Tie"
    
    if (userTerm === "rock" && computerTerm === "seasor") return "User win";
    if (userTerm === "paper" && computerTerm === "rock") return "User win";
    if (userTerm === "seasor" && computerTerm === "paper") return "User win"
    return "Computer win"
}

console.log(rps("rock", "paper"));