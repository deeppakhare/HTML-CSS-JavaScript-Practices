class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Usernmae: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const deep = new User("deep")
// console.log(deep.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// iphone.logMe();
console.log(iphone.createId());
console.log(`fg`);


