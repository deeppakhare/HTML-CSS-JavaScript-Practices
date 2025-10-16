let choice = 1;
let tempFahrenheit = 104;
const THIRTYTWO = 32;
const TEMP = 1.8;
const NORMAL_CELCIUS = 37;
let result1 = tempFahrenheit - THIRTYTWO;
let result2 = result1 / TEMP;

switch(choice){
    case 1:
        console.log("Your body temperature in Celsius is:" + result2 );
        result2 > NORMAL_CELCIUS ? console.log("You have fever, take rest!") : console.log("You are absolutely OK!! Enjoy");
        // Above is the Ternary Statement used
        break;
    case 2:
        console.log("No I don't want to check whether i have fever or not <br>");
        break;
    default:
        console.log("Sorry wrong choice provided");
}
