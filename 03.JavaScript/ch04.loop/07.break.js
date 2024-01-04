let sum = 0;
while (true) {
    let dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    sum += dice;
    if (sum > 21)
        break;
}
console.log(sum)


// break;는 현재 머물러 있는 루프에만 적용(상위 루프 적용 불가능)
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (j == 2)
            break;
        console.log('point A')
    }
    console.log('point B')
}
