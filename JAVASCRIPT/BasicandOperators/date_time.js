let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.getTime());
// console.log(myDate.toISOString());

// console.log(typeof myDate);
// console.log(myCreatedsDate.toDateString());
// let myCreatedsDate = new Date(2025, 8, 24, 5, 3)
let myCreatedsDate = new Date("01-14-2023")
// console.log(myCreatedsDate.toLocaleString());
// console.log(myCreatedsDate.getTime());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getHours());
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()}`);

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate);

