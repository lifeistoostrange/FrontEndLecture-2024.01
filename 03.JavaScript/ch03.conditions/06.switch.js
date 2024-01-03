// 다중 선택 - switch
let score = Math.ceil(Math.random() * 60) + 40;         //40~100 사이의 정수
let grade = '';


//parseInt : 소수점을 버리는 함수
switch (parseInt(score / 10)) {
    case 10:
    case 9:
        grade = 'A';
        break;
    case 8:
        grade = 'B'
        break;
    case 7:
        grade = 'C'
        break;
    case 6:
        grade = 'D'
        break;
    default:
        grade = 'F';

}
console.log(`당신의 점수는 ${score}이며, 학점은 ${grade} 입니다`)
