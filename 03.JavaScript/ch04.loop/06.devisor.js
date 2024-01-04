/* let string = '';
let count = 0;

for (i = 1; i < 13; i++) {
    
    let d = 12 % i;
    
    if (d == 0) {
        string += i + ',';
        count++;
    }
}

console.log(`12의 약수에는 ${string}이 있으며 개수는 ${count}개 입니다.`)
 */

let num = 6;
let divisors = [];
for (let i = 1; i <= num; i++) {
    if (num % i == 0)
        divisors.push(i)
}
console.log(divisors)

let num1 = 24, num2 = 60;
let commonDivisors = [];

for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        commonDivisors.push(i)
    }
}
console.log(commonDivisors)