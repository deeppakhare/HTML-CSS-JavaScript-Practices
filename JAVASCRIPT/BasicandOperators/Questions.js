// 1.Create a Date object representing the current date and time, and print it.

// const today = new Date()
// console.log(today);


// 2.How can you get the current year, month, and day from a Date object?

// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1 );
// console.log(date.getDate());


// 3.Write code to display the current date in the format:
// 👉 YYYY-MM-DD.

// const date = new Date()
// console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);


// 4.Use Math.random() to generate a random number between 1 and 10 (inclusive).

// const random = Math.floor(Math.random()*10) + 1;
// console.log(random);

// 5.Round the number 7.5689 to two decimal places.

// const number = 7.5689
// console.log(number.toFixed(2))

// 6.Convert the string "123.45px" into a floating-point number.

// const num = "123.45px"
// console.log(parseFloat(num));  //parseFloat() extracts the numeric part from a string.



// 7.Find the absolute difference between two numbers using Math.abs().

// const num1 = 22.45
// const num2 = 33.11
// console.log(Math.abs(num1 - num2));  //Math.abs() gives the absolute (non-negative) value.


// 8.Calculate the square root, cube root, and power (2³) of numbers using Math methods.

// const num = 50
// console.log(Math.sqrt(num));
// console.log(Math.cbrt(num));
// console.log(Math.pow(2,3));


// 9.Use Math.max() and Math.min() to find the largest and smallest numbers in an array: [4, 8, 1, 6, 10].

// let arry = [4, 8, 1, 6, 10]
// console.log(Math.max(...arry));
// console.log(Math.min(...arry));  //Spread syntax (...) passes array items as arguments.


// 10.Write a function to generate a random integer between two given numbers.

// function random(a,b) {
//     return Math.floor(Math.random() * ( b - a + 1 )) + a ;
// }
// console.log(random(20, 35));

// 11.Create two Date objects — one for today and one for December 31, 2025 — and find how many days remain until that date.

// const today = new Date()
// const date = new Date('2025-12-31')
// const diff = date - today
// let days = Math.floor(diff / (1000 * 60 * 60 * 24 ))
// console.log(days);


// 12.Display the current time (hours and minutes) in the format: HH:MM.

// const time = new Date()
// console.log(`${time.getHours()}:${time.getMinutes()}`);


// 13.Write a function that returns the name of the weekday (e.g., “Monday”) for a given date.

// function weekday (date) {
//     const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//     return days[date.getDay()] 
// }
// console.log(weekday(new Date('2025-10-28')));
// const day = new Date()
// console.log(day.getDay());


// 14.Add 7 days to the current date and print the new date.

// const date = new Date()
// date.setDate(date.getDate() + 7);
// console.log(date.toDateString());



// 15.Given a timestamp in milliseconds, convert it into a readable date and time string.

// const timestamp = 1555225566162
// const date = new Date(timestamp)
// console.log(date.toLocaleString());



// 16.Create a program that shows the current time updating every second (like a digital clock).

// setInterval(() => {
//   const t = new Date();
//   const h = t.getHours().toString().padStart(2, '0');
//   const m = t.getMinutes().toString().padStart(2, '0');
//   const s = t.getSeconds().toString().padStart(2, '0');
//   console.log(`${h}:${m}:${s}`);
// }, 1000);


// 17.Write a function to check whether a given year is a leap year.

// function leap (year) {
//     return year % 4 == 0
// }
// console.log(leap(2023));


// 18.Generate a random 6-digit OTP using Math.random().

// const otp = Math.floor(Math.random()*1000000)
// console.log(otp);


// 19.Use Math.sin(), Math.cos(), and Math.tan() to find the trigonometric values of 45°.

// const angle = 45 * (Math.PI / 180); // convert to radians
// console.log(Math.sin(angle));
// console.log(Math.cos(angle));
// console.log(Math.tan(angle));



// 20.Write a function that calculates compound interest given principal, rate, and time.

function compundIntrest(p, r, t, ) {
    const a = p * Math.pow(1 + r / 100, t)
    return (a - p).toFixed(2)
}
console.log(compundIntrest(1000, 5, 2));
