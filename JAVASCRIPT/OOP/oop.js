const user = {
    username: "deep",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



function User(username, logiCount, isloggedIn) {
    this.username = username;
    this.logiCount = logiCount;
    this.isloggedIn = isloggedIn;
    
    this.greeting = function (){
        console.log(`Welcome ${username}`);
    }

    //return this
}

const userOne = new User("deep", 12, true)
const userTwo = new User("Deepak", 32, false)
console.log(userOne.constructor)
// console.log(userTwo)