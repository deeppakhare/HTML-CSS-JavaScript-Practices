// Stack(Premitive Data Type) Heap(Non-Premitive Data Type)

let myName = "Deep Pakhare"

let anotherName = myName

anotherName = "NayanPakhare";
console.log(myName);
console.log(anotherName);


let userOne = {
    email: "deep@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "nayan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);