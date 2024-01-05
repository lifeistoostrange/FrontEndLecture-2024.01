// 객체에 대한 반복문

let maria = { name: 'maria', age: '25', job: 'student' };
let name = 'james', age = '27', job = 'programmer';
let james = { name: name, age: age, job: job };

console.log(maria, james);

for (let key in james) {
    console.log(key, ':', james[key]);
}

// ES-6 (ECMA Script - 6 : 2015년도에 제정된 표준)
// key와 value를 가리키는 변수의 이름이 동일하면 변수명 생략 가능
let james2 = { name, age, job };            //{ name: name, age: age, job: job };

// JSON(JavaScript Object Notation)
//          -외부와 데이터를 주고받을 때 사용
//          -업계 표준(de facto standard)
let externalForm = JSON.stringify(james);
console.log(externalForm);

let person = JSON.parse(externalForm);
console.log(person);
console.log(person.name == james.name && person.age == james.age && person.job == james.job)

//  object 들로 구성된 array도 선언 가능
let personArray = [james, maria];
console.log(personArray);
