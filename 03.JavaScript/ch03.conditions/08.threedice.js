const dice = { first: Math.ceil(Math.random() * 6), second: Math.ceil(Math.random() * 6), thrid: Math.ceil(Math.random() * 6) };
let prize = 0;

const maxValue = Math.max(...Object.values(dice));



console.log(`${dice.first}  ${dice.second}  ${dice.thrid}`);

if (dice.first === dice.second || dice.second === dice.thrid || dice.first === dice.thrid) {
    prize = 1000 + maxValue * 100;
} else {
    prize = maxValue * 100;
} if (dice.first === dice.second && dice.second === dice.thrid) {
    prize = 10000 + maxValue * 1000;
}

console.log(`상금 ${prize}원`);



//OR ||
//AND &&