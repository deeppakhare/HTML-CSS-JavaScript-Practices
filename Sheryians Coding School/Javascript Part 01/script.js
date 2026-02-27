// let marks = 75;

// let result = marks >= 90 ? "Excellent" : marks >= 70 ? "Good" : marks >= 40 ? "Average" : "Fail"

// console.log("Result is : " + result);


function calc(a, b, operator) {
    let result ;
    
    switch (operator) {
        case '+':
            result =  a + b;
            break;
        case '-':
            result =  a - b;
            break;
        case '*':
            result =  a * b;
            break;  
        case '/':
            if (b === 0) {
                result =  "Invalid"
            } else {
                result =  a / b;
            } 
            break;
        default: 
            "Invalid"
            break;
    }
    return result
}

console.log(calc(2, 0, '/'));











