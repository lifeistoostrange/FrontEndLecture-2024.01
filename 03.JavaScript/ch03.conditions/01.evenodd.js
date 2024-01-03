// 홀수 짝수
let num = Math.ceil(Math.random() * 100);       // num에다가 0에서 1 사이의 수*100을 집어넣음


//조건문 안에 실행문이 하나인 경우는 중괄호 생략 가능
if (num % 2 == 0)
    console.log(`${num}은 짝수입니다.`);

else
    console.log(`${num}은 홀수입니다.`)


num = Math.ceil(Math.random() * 100);

if (num % 2 == 0)
    console.log(`${num}은 짝수입니다.`);

if (num % 2 == 1)
    console.log(`${num}은 홀수입니다.`)

// 삼항연산자
num = Math.ceil(Math.random() * 100);
let result = (num % 2 == 0) ? '짝수' : '홀수';
console.log(`${num}은 ${result}입니다.`);