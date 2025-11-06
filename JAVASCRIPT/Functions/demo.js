// function sayMyName (){
// console.log("D");
// console.log("E");
// console.log("E");
// console.log("P");
// }

// sayMyName()


// function addTwoNumbers (num1, num2) {
//     console.log(num1 + num2);
    
// }
// const result = addTwoNumbers(3, "4")


function addTwoNumbers (num1, num2) {
    let result = num1 + num2
    return result
    console.log("Deep ", result);
    
}
const result = addTwoNumbers(3, 4)

// console.log("Result value",result);

function loginUserMessage (username) {
    return `${username} just logged in`
}

// console.log(loginUserMessage("Deeep"));


function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(2000,300,4222,4323));


const user = {
    username: "deep",
    price: 342
}

function handleObject(anyobject ) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject ({
    username: "pakhare",
    price : 33
})

const myNewArray = [200, 3333, 444]

function returnsecondvalue(getarray) {
    return getarray[2]
}
console.log(returnsecondvalue(myNewArray));
