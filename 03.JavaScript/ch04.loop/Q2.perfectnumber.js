// 1. 완전수(perfect number)
// 자기 자신을 제외한 약수의 합과 자기 자신이 같은 수
var today = new Date();
var hours = ('0' + today.getHours()).slice(-2);
var minutes = ('0' + today.getMinutes()).slice(-2);
var seconds = ('0' + today.getSeconds()).slice(-2);
var timeString = hours + 'h ' + minutes + 'm ' + seconds + 's';
console.log(timeString);

let perfectNumbers = [];

for (let i = 2; i <= 10000; i++) {
    let sum = 0;
    for (let j = 1; j < i; j++) {

        if (i % j == 0) {
            sum += j;
        }
    }
    if (sum == i) {
        perfectNumbers.push(i);
        console.log(`writed ${i}`);
    }
}
console.log(perfectNumbers);


let pythagorasNumber = [];
for (let a = 1; a < 1000; a++) {
    for (let b = a + 1; b < 1000 - a; b++) {
        let c = 1000 - a - b

        if (a * a + b * b == c * c) {
            pythagorasNumber.push(a, b, c);
            console.log(`writed ${a}, ${b}, ${c}`);
        }
    }
}
console.log(pythagorasNumber);


// 이 아래부터는 선생님이 적어주신 코드
for (let i = 2; i <= 10000; i++) {
    let divSum = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            divSum += j;
        }
    }
    if (i == divSum) {
        console.log(i)
    }
}

for (let a = 1; a <= 1000; a++) {
    for (let b = a + 1; b <= 1000; b++) {
        let c = 1000 - a - b;
        if (a * a + b * b == c * c) {
            console.log(a, b, c);
            process.exit(0);
        }
    }
}