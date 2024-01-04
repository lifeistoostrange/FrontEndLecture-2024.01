// 배열 Array
// 여러 개의 자료를 한꺼번에 다룰 수 있는 자료형
// 대괄호로 묶고 쉼표로 구분
// 배열에는 여러 자료형이 섞여도 된다***********************
// 배열 안에 있는 각 자료를 '요소' 라고 부른다

let person = ['james', 27, 'male', 'programmer', 175.5];

console.log(`${person}`);
console.log(typeof person);
console.log(person.length);
console.log(person[0], person[1], person[person.length - 1]);

//  배열을 효율적으로 사용하기 위해 반복문을 사용
//  while : 반복횟수가 정해지지 않았을 경우
//  for : 반복횟수가 정해졌을 경우

/* for (let i = 0; i < person.length; i++) {
    console.log(person[i]);
}
for (let j = person.length - 1; j >= 0; j--) {
    console.log(person[j]);
} */

// Enhanced for loop
console.log(`Enhanced for loop`)
for (let item of person)
    console.log(item);