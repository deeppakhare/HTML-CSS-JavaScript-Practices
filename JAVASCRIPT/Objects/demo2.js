// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123adv"
tinderUser.name = "Deep"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email: "deep@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Deep",
            lastName: "Pakhare"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = {
    5: "a",
    6: "b"
}

// const obj4 = Object.assign({},obj1, obj2, obj3)
const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "deep@gmail.com"
    },
    {
        id: 1,
        email: "deep@gmail.com"
    },
    {
        id: 1,
        email: "deep@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Deep"
}

const { courseInstructor: instructor } = course

// console.log(instructor);

// JSON file code :- 
// {
//     "name": "Deep",
//     "email": "deep@gmail.com",
//     "age": 29
// }

let dataObject2 = new Date;
console.log("Date is: " + dataObject2.getDay());


console.log(Math.max(1,22,54,7,69,11));

location.assign('http://www.facebook.com'); 
//Opens facebook page 


