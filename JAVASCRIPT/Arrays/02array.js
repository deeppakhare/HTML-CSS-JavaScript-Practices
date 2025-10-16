const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const allnewheros = [...marvel_heros, ...dc_heros]      // Spread Operator
// console.log(allnewheros);

const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5] ]]

const real_another_array = anotherarray.flat(Infinity)

// console.log(anotherarray);

// console.log(Array.isArray("Deep"));
// console.log(Array.from("Deep"));
// console.log(Array.from({name: "Deep"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));



