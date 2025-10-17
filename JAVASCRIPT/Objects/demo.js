//+++++ The State and Behavour is represented by JavaScript Objects ++++++++++++

const mySymbol = ("key1")

const JsUser = {
    name: "Deep",
    "full name ": "Deep Pakhare",
    [mySymbol]: "mykey1",
    age: 17,
    location: "Buldhana",
    email: "deep@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser.email);
// console.log(JsUser["full name "]);
// console.log(JsUser[mySymbol]);

JsUser.age = 20
// Object.freeze(JsUser)
JsUser.email = "deep@asus.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello welcome here");
}
JsUser.greetingtwo = function(){
    console.log(`Hello welcome here, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());



