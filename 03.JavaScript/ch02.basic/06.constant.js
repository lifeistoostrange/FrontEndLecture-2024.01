// 상수(Constant)
const a = 'hello';
console.log(a);
// a += 'world';            // 이거실행하면 런타임에러

const obj = {x:1, y:2};
// obj = {x:1, y:2 z:3};    // 이거도에러
obj.x = 10;                 //obj가 여기서는 참조형 변수라서 가능
obj.y = 20;
console.log(obj);