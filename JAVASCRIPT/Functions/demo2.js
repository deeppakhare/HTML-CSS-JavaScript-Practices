// var c = 300;
let a = 300;

if (true) {
    let a = 10
const b = 20
// console.log("Inner let value: "+ a);


}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Deep"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()

}

// one()


if (true) {
    const username = "deep"
    if (true) {
        const website ="youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ============  intresting ====================

console.log(addone(6));
function addone(num) {
    return num +1
    
}

console.log(addtwo(22));
const addtwo = function(num) {
    return num +2
}

