// String 객체

let hello = '안녕하세요?';

// 속성
console.log(hello.length);

//메소드 (method)
console.log(hello[1], hello.charAt(1));
console.log(hello + '여러분!', hello.concat('여러분!'));
console.log(hello.indexOf('하'));
console.log('pinapple'.lastIndexOf('p'));

// 문자열을 분리한 뒤 배열을 반환

let friuts = '사과, 배, 감, 포도';
let friutArray = friuts.split(',');                    //내용 안을 기준으로 분리
console.log(friutArray);


//문자열 일부분(substring)
const today = new Date().toISOString();
console.log(today);
//2024-01-08T02:07:11.563Z
// 날짜 추출 : 2024-01-08
console.log(today.substring(0, 10));                    //인수 a부터 b까지 스트링 출력
console.log(today.substring(0, today.indexOf('T')));
console.log(today.split('T')[0]);
// 시간 추출 : 02:07:11
console.log(today.substring(11, 19));
console.log(today.substring(today.indexOf('T') + 1, today.indexOf(',')));
console.log(new Date().toLocaleString());

// YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);        // 4 -> '04', 23 -> '23'
}
function myDateTime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth() + 1)}-${twoDigit(now.getDate())} ` +
        `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}

console.log(new Date());
console.log(myDateTime());
console.log(myDateTime().substring(11))         // .substring에서 두번째 인수를 생략하면 끝까지 출력

// 공백 제거 trim
let space = '    Hello?   ';
console.log(space.trim(), ':', space.trimStart(), ':', space.trimEnd());

// Method chain
console.log(space.trim().substring(0, 5).toUpperCase());

// 문자열 반환
const sample = 'A quick brown fox jumps over the lazy dog';
console.log(sample.replace('A', 'a'));
console.log(sample.replace('o', 'O'));          // 제일 앞에 있는 문자열만 반환

// 정규 표현식 regular expression (딥러닝을 이용한 자연어 처리 입문 > 02-05 정규 표현식 참조)
console.log(sample.replace(/o/g, 'O'));         //g global 에 대해서 /o/를 처리하라

const str = 'A quick brown fox - 3 - 갈색의 재빠른 여우가 the lazy dog = 5 = 게으른 개';
let eng = str.replace(/[^A-Z a-z]/g, '');           //영문자와 공백만 남기고 모두 지움
let kor = str.replace(/[^ㄱ-ㅎ ㅏ-ㅣ 가-힣]/g, ''); //한글과 공백만 남기고 모두 지움
let num = str.replace(/[^0-9]/g, '');               //숫자만 남기고 모두 지움
let spe = str.replace(/[^-=]/g, '');                //-, =만 남기고 모두 지움
let wut = str.replace(/[^&-=]/g, '');               //얜 뭐야...

console.log(eng, kor, num, spe, wut);

//문자열 찾기
console.log(hello.indexOf('안녕'));
let serch = 'hello';                 //결과값이 0 이상이면 찾고자 하는 문자열이 존재한다
if (hello.indexOf(('안녕')) >= 0)
    console.log(`찾고싶은 단어 ${serch} 이/가 문장 안에 존재합니다.`)
else
    console.log(`찾고싶은 단어 ${serch} 이/가 문장 안에 존재하지 않습니다.`)