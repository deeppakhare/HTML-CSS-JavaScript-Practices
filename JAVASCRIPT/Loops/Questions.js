// 1.Write a for loop that prints numbers 1 to 10.

// for (let i =1;  i <= 10; i++){
//     console.log(i)
// }


// 2.Modify it to print "5 is the best number" when i == 5.

// for (let i = 1; i <= 10; i++) {
//     if (i == 5) console.log(`5 is best number`)
//     console.log(i)
// }

// 3.Create a multiplication table (1 × 1 to 10 × 10) using nested for loops.

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }


// 4. Loop through an array ["Flash", "Superman", "Batman"] and print each hero’s name.

// let arry = ["Flash", "Superman", "Batman"]

// for (let i = 0; i < arry.length; i++) {
//     const element = arry[i];
//     console.log(element)
// }


// 5.Write a loop to print only even numbers from 1 to 20.

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }

// }


// 6.Use break to stop a loop when i == 7.

// for (let i = 0; i <= 10; i++) {
//     if (i == 7) {break;}
//     console.log(i)
// }


// 7.Use continue to skip printing the number 5 in a loop from 1–10.

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i)
// }

// 8.Write a while loop that prints numbers from 1 to 10, and a do...while loop that prints "Running once even if condition fails" when starting from 11.

// let i = 1
// while (i <= 10) {
//     console.log(i);
//     i++
// }


// let num = 11
// do {
//     console.log("Running once even if condition fails")
//     } while (num <= 10);


// 9.Use a for...of loop to print each element from [1,2,3,4,5].

// let arry = [1, 2, 3, 4, 5]

// for (const key of arry) {
//     console.log(key)
// }


// 10. Use a for...of loop to print each character of "Hello World".


// let word = "Hello World"
// for (const key of word) {
//     console.log(key)
// }


// 11.Create a Map with country codes and names. Use for...of to print "IN : India" style output.

// let map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('NA', "North America")
// map.set('SA', "South America")

// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`)
// }

// 12. Create an object:
// const myObject = { js: 'JavaScript', py: 'Python', cpp: 'C++' }
// Loop through it with for...in and print each key and value.

// const myObject = { 
//     js: 'JavaScript', 
//     py: 'Python', 
//     cpp: 'C++'
// }

// for (const key in myObject) {
//     console.log(`${key} : ${myObject[key]}`)
// }


// 13.Given an array ["js", "ruby", "c++", "python"], use for...in to print all values.


// const arry = ["js", "ruby", "c++", "python"]
// for (const key in arry) {
//     console.log(arry[key])
// }


// 14. Create an array ["js", "cpp", "ruby", "python"] and print each value using forEach().

// let array = ["js", "cpp", "ruby", "python"]

// array.forEach(element => {
//     console.log(element)
// });


// 15. Use an arrow function inside forEach() to print each value and its index.


// let array = ["js", "cpp", "ruby", "python"]

// array.forEach((element,key) => {
//     console.log(`item is ${element} & Index is ${key}`)
// });


// 16. Write a forEach() that prints all elements of this array of objects:
// const courses = [
//   { lang: "js", name: "JavaScript" },
//   { lang: "py", name: "Python" },
//   { lang: "cpp", name: "C++" }
// ];


// const courses = [
//   { lang: "js", name: "JavaScript" },
//   { lang: "py", name: "Python" },
//   { lang: "cpp", name: "C++" }
// ];

// courses.forEach( item => {
//     console.log(`lang: ${item.lang} , name: ${item.name}`)
// }
// );


// 17. Demonstrate that forEach() does not return a new array by assigning its result to a variable and printing it.



// 18.Use filter() to get all numbers greater than 4 from [1,2,3,4,5,6,7,8,9,10].

// const arry = [1,2,3,4,5,6,7,8,9,10]
// const greater = arry.filter( num => {
//     return num > 4
// } )
// console.log(greater)

// 19.Use forEach() instead of filter() to push all numbers greater than 5 into a new array manually.

// const newArry = []
// arry.forEach(element => {
//     if (element > 4) {
//         newArry.push(element)
//     }
// });
// console.log(newArry)


// 20.Use map() to create a new array that adds 10 to every number from [1,2,3,4,5].

// const arry = [1,2,3,4,5]
// const adds = arry.map(num => num + 10)
// console.log(adds)


// 21.Chain map() and filter() to first multiply numbers by 10, then keep only values ≥ 40.

// const arry = [1,2,3,4,5]
// const multy = arry.map(num => num * 10 )
// console.log(multy)
// const sort = multy.filter(num => {
//         return num >= 40
// });
// console.log(sort)

// 22.Write a reduce() function to sum all numbers in [1,2,3,4].

// const arry = [1,2,3,4]
// const sum = arry.reduce((acc, curr) => acc + curr, 0)
// console.log(sum);


// 23.Modify it to show how the accumulator and currentValue change at each step.

// const arr4 = [1, 2, 3];
// const total2 = arr4.reduce((acc, curr) => {
//   console.log(`acc: ${acc}, curr: ${curr}`);
//   return acc + curr;
// }, 0);
// console.log(`Total: ${total2}`);

// 24.Use reduce() to calculate the total price of items in this shopping cart:
// const cart = [
//   { itemName: "JS Course", price: 399 },
//   { itemName: "Python Course", price: 999 },
//   { itemName: "C++ Course", price: 699 },
//   { itemName: "Java Course", price: 899 },
//   { itemName: "Full Stack Course", price: 1999 }
// ];

// const total = cart.reduce((acc,current) => {
//     return acc + current.price
// },0)
// console.log(total);


// 25. Combine map(), filter(), and reduce() to:
// Add 5 to each number
// Keep only numbers ≥ 10
// Find the sum of the remaining numbers.
// Example input: [2, 5, 8, 9, 10] → Output: sum of [10, 13, 14, 15] = 52

// const numbers = [2, 5, 8, 9, 10];

// const finalSum = numbers
//   .map(num => num + 5)      
//   .filter(num => num >= 10) 
//   .reduce((acc, curr) => acc + curr, 0); 

// console.log(finalSum);


// 26. Write a loop that reverses the string "JavaScript".

const string = "JavaScript"
let reverse = ""

for (let i = string.length - 1; i >= 0; i--) {
  reverse += string[i]; 
}
console.log(reverse);


// 27. Print pattern

for (let i = 1; i <= 4; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
