/* let firstdice = Math.ceil(Math.random() * 7) - 1;
let seconddice = Math.ceil(Math.random() * 7) - 1;
let thriddice = Math.ceil(Math.random() * 7) - 1; */
const dice = { first: Math.ceil(Math.random() * 7) - 1, second: Math.ceil(Math.random() * 7) - 1, thrid: Math.ceil(Math.random() * 7) - 1 };
let prize = 0;

const maxValue = Math.max.apply(null, dice);


console.log(`${dice.first}  ${dice.second}  ${dice.thrid}`);

if (dice.first == dice.second == dice.thrid) {
    prize = 10000 + maxValue * 1000;
}
else if (dice.first == dice.second || dice.second == dice.thrid || dice.first == dice.thrid) {
    prize = 1000 + maxValue * 100;
}
else {
    prize = maxValue * 100;
}

console.log(`${maxValue}`);



//OR ||
//AND &&