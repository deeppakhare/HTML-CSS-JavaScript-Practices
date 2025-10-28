// const userLoggedIn = true
// const debitCard = true
// const loggedinfromgoogle = false
// const loggedinfromemail = true

// if (userLoggedIn && debitCard && 2==2) {
//     console.log(`Allow to buy`);
// }
//  if (loggedinfromgoogle || loggedinfromemail) {
//     console.log(`User logged in`);
    
//  }


// ===switch statement ==========

// const month = 1

// switch (month) {
//     case 1:
//         console.log(`January`);
//         break;
//     case 2:
//         console.log(`Feb`);
//         break;
//     case 3:
//         console.log(`Mar`);
//         break;
//     case 4:
//         console.log(`Aprl`);
//         break;
//     default:
//         console.log(`not matched`);
//         break;
// }


const userMail = "deep@.ai"

if (userMail) {
    // console.log(`Got user mail`);
} else {
    // console.log(`Dont have email`);   
}


//----------------  Falsy values --------------------------------

// 1. false 
// 2. 0
// 3. -0
// 4. BigInt on
// 5. ""
// 6. null
// 7. undefined
// 8. NaN

//------------------------- Truthy Values -------------------

// 1. "0"
// 2. 'false'
// 3. " "
// 4. []
// 5. {}
// 6. function(){}



// Nullish Coalescing Operator (??) : null, undefined

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? undefined ?? 30


// console.log(val1);



//-------------  Ternary Operator -------------------

const iceTeaPrice = 100

iceTeaPrice >= 800 ? console.log(`price less than 80`) : console.log(`more than 80`);

