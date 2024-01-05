// 배열과 객채

// 객체의 특수한 형태
let fruitsArray = ['감', '귤', '밤', '배'];
console.log(typeof fruitsArray);

let fruitObject = { 0: '감', 1: '귤', 2: '밤', 3: '배' };
console.log(fruitsArray[0], fruitObject[1]);

// 객체(Object) - 자료구조로서 객체는 파이선의 딕셔너리, 자바의 맵과 유사함
let personArray = ['james', 27, 'male', 'programmer', 175.5];
let personInfo = { name: 'james', age: 27, gender: 'male', job: 'programmer', height: 175.5 }
let carInfo = {manufacture: '현대자동차', model: 'casper', color:'카키'};
console.log(carInfo);

// 객체에 대한 접근
console.log(personInfo['name']);
console.log(personInfo.name);           // 둘다 사용 가능

let key = 'job';
console.log(personInfo[key]);