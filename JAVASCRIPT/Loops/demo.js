// for loop 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is best number`);
    }
    // console.log(element);
}

// console.log(element);


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and inner value ${i}`);  
        // console.log( i + '*' +j + ' = ' + i*j);
         
    }
}


let myarray = ["flash", "superman", "batman"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}


// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}