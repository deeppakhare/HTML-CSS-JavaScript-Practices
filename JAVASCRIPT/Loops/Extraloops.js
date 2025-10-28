//---------- for of loop -------------------

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
        
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each character ${greet}`);
    
}

//----------  Maps  -------------

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'PUBG'
// }

// for (const [key, value] of myObject) {
//     console.log(key, '-', value);
    
// }


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
//    console.log(`${key} is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "c++", "html"]

for (const key in programming) {
    // console.log(programming[key]);   
}


//---------------------    -------------------------------

const coding = ["js", "cpp", "ruby", "python"]

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

// const myCodding = [
//     {
//         language: "js",
//         name: "javascript"
//     },
//     {
//         language: "cp",
//         name: "computer programming"
//     },
//     {
//         language: "py",
//         name: "python"
//     },
//     {
//         language: "git",
//         name: "github"
//     },
// ]

// myCodding.forEach( (item) => {
//     console.log(item);
    
// } )





// const coding2 = ["js", "cpp", "ruby", "python"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num>4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// }
// )


// console.log(newNums);

 
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num+10 )

const newNums = myNumbers
            .map( (num) => num*10)
            .map( (num2) => num2+1 )
            .filter( (num) => num>=40 )

// console.log(newNums);



// const myNums2 = [1, 2, 3 ]

// const myTotal = myNums2.reduce(function (accumulator, currentvalue) {
//     console.log(`accumulator value : ${accumulator}`);
//     console.log(`current value : ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0)
// console.log(myTotal);


// const myNums2 = [1,2,3,4]

// const myTotal = myNums2.reduce( (acc, current) => {
//     return acc + current;
// }, 0)
// // console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 399
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "c++ course",
        price: 699
    },
    {
        itemName: "java course",
        price: 899
    },
    {
        itemName: "fullStack course",
        price: 1999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item ) => {
    console.log(`item prices of ${item.itemName} is ${item.price}`);
    return acc + item.price
},0 )

console.log(`Total price of all courses is `,priceToPay);
