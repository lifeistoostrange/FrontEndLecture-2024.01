// 점수에 따른 학점 부여
// 90~100 = A
// 80~89 = B
// 70~79 = C
// 60~69 = D
// ~59 = F

let score = Math.ceil(Math.random() * 60) + 40;         //40~100 사이의 정수
let grade = '';

if (score > 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else
    grade = 'F';

console.log(`당신의 점수는 ${score}이며, 학점은 ${grade} 입니다`)