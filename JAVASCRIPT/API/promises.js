const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async task is completed`);
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log(`Promise consumed`);
})

new Promise(function(resolve, reject){
    setTimeout( function(){
        console.log("async task two")
        resolve()
    }, 1000)
}).then(function(){
    console.log(`async 2 resolved`)
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Deep", email: "deep@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "deep", password: "123"})
        } else {
            reject('Error: something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error)
}).finally(() => {
    console.log(`the promise is either resoved or rejected`)
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject(`Error : JS went wrong`)
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/deeppakhare')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))