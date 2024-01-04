// while loop
let person = ['james', 27, 'male', 'programmer', 175.5];
let i = 0;

while (i < person.length) {
    console.log(person[i]);
    i++
}

let sum=0;
while (sum<=21) {
    let dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    sum += dice;
}
console.log(sum);