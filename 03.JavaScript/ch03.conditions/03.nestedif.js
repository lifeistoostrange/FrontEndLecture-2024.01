//중첩조건문 (nested if)
//윤년
//4로 나누어지면 윤년, 100으로 나누워지면 평년, 400으로 나누어지면 윤년

let year = 2104;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(`${year}은 윤년입니다`);
        }
        else {
            console.log(`${year}은 평년입니다`);
        }
    }
    else {
        console.log(`${year}은 윤년입니다`);
    }
}
else {
    console.log(`${year}은 평년입니다`);
}

let year2nd = (year % 4 == 0) ? ((year % 100 == 0) ? ((year % 400 == 0) ? '윤년' : '평년') : '평년') : '평년';

console.log(`${year}은 ${year2nd}입니다`);

// let result = (num % 2 == 0) ? '짝수' : '홀수';