class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password
    }

    addourses(){
        console.log(`New course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

// chai.addourses()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

chai.logMe()

console.log(chai instanceof User);
