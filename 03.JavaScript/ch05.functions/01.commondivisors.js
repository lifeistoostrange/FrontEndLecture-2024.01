function getDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
            divisors.add(i);
    }
    return divisors;
}



let divisors1 = getDivisors(12);
let divisors2 = getDivisors(30);
console.log(divisors1);
console.log(divisors2);
console.log(divisors1.intersection(divisors2));
