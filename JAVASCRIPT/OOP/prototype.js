// let myName = "Deep     "
// let mySirname = "Pakhare     "

// console.log(myName.trim().length);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "slink",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
        
    }
}

Object.prototype.deep = function(){
    console.log(`deep is present in all object`);
    
}

Array.prototype.heydeep = function(){
    console.log(`deep says hello`);
}

// heroPower.deep()

// myHeros.deep()
// myHeros.heydeep()

// heroPower.heydeep()

// Inheritance 


const user = {
    username: "deep",
    email: "exaple.gmail.com"
}

const teacher = {
    makezvideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user


//  Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "ChaiourCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);

}

anotherUsername.trueLength()

"deep".trueLength()