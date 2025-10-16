let myArr = ["android", "IOS", "Windows"]

// console.log(myArr.slice(0,3));

// myArr.splice(2,0,"Linux");

let myArr2 = ["Moto", "Apple"]

// console.log(myArr.concat(myArr2));

let myArr3 = [...myArr,...myArr2];   //........ Spread Operator ...........
// console.log(myArr3);

let myArr4 = [...myArr3];
myArr4.push("Vivo");
// console.log(myArr4);
// console.log(myArr[2]);
console.log("Length of myArr is "+myArr4.length);





