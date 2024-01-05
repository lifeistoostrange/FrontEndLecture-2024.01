// 숫자 변환 내장(built-in) 함수

const a = `123.65`, b = `0xff`, c = `23`;

console.log(Number(a), Number(b));

// 정수 Integer, 실수 Floating point
console.log(parseInt(a), parseFloat(a));
console.log(parseInt(b), parseFloat(b), parseFloat(c));

console.log(parseInt('1401호'), Number('1401호'));              //정수는 character 출력 가능, Number는 불가능
console.log(parseInt('1,401원'), parseInt('503동 1401호'));     //쉼표 구분 불가능