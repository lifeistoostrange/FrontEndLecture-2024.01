// 선언적 함수
function add(a, b) {        // a, b: 매개변수, parameter, arguement
    return a + b;           // return; : 반환값
}

console.log(add(3, 4));
console.log(add(8, 9));

// 익명 함수 Annonymous function
const annonymousSum = function (a, b) {
    return a + b;
}
console.log(annonymousSum(3, 4));
console.log(annonymousSum(8, 9));

// 화살표 함수, 람다 함수
const arrowSum = (a, b) => a + b;
console.log(arrowSum(3, 4));
console.log(arrowSum(8, 9));
