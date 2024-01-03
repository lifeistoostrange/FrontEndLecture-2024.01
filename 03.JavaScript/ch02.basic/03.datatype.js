// 자바스크립트의 자료형
// 1. Number
/* console.log(5 + 2, 5 - 2, 5 * 2, 5 / 2);     //사칙연산
console.log(5 % 2);         //modular
console.log(2 ** 10);       //square
console.log(1.3e-8);        //1.3 * 10 ** -8 */

// 2. string
/* console.log('He said "I love you"');
console.log("I'll be back.");
console.log("He said \"I love you\"");      //escaping
console.log('backslash 기호를 사용할 때에는 \\ 두개를 사용하면 됩니다');

let hello = '안녕하세요?';
console.log(hello[2], hello[5], hello[0]);

// template literal
let a = 2, b = 3;
console.log(a, '더하기', b, '는', 2 + 3, '입니다');
console.log(a, '더하기', b, '는', a + b, '입니다');

console.log(`${a} 더하기 ${b} 는 ${a + b} 입니다`);

console.log(`올해는 ${new Date().getFullYear()}년 입니다.`)

/* 
        fullYear        :   camel case      
        full_year       :   snake case        
*/


// 논리형 boolean
console.log(typeof (true), typeof (false));
console.log(2 == 2.0, 5 >= 4, !('가나다' > '마바사'));      //관계연산자

let x = 10;
console.log(x > 8 || x < -3);           //OR ||
console.log(x > 8 && x < 12);           //AND &&
console.log(true > 10);                 //이 경우에는 'true'가 비교할 수 없는 대상이기 때문에 true를 1로 생각하고 비교연산, false의 경우에는 0
