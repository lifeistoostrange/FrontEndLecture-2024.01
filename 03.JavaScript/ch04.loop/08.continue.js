// 1 ~ 10 홀수의 합
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0)
        continue; 
    sum += i;
}
console.log(sum);


/* if (i % 2 == 0)
        continue; */