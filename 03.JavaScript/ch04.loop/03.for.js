let sumOdd = 0;
for (let i = 1; i <= 1000; i = i + 2) {
    sumOdd += i;
}
console.log(`1에서 1000까지 홀수의 합은 ${sumOdd}입니다.`);

let sumEven = 0;
for (let i = 0; i <= 1000; i = i + 2) {
    sumEven += i;
}

console.log(`1에서 1000까지 짝수의 합은 ${sumEven}입니다.`);

let multiplyToTen = 1;

for (let i = 1; i <= 10; i++) {
    multiplyToTen = multiplyToTen * i;
}

console.log(`1에서 10까지의 곱은 ${multiplyToTen}입니다.`);

// array의 요소 출력
// element1, element2, ...
let fruits = ['사과', '귤', '감', '배'];
let fruitStr = '';
for (let fruit of fruits) {
    fruitStr += fruit + ',';
}

console.log(fruitStr)