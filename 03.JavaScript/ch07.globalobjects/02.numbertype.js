// Number 객체

let numberFromLiteral = 273;                    //상수 Literal
let numberFromConstructor = new Number(273);

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());
console.log(pi.toFixed(5));
console.log(pi.toPrecision());

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
console.log(Math.pow(2, 53) - 1);