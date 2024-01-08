// Array

//  1. 배열 생성
let fruits = ['apple', 'bannana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW');
console.log(cars);

// 배열의 속성
console.log(cars.length);

// 3. 배열 메소드
// 3-1 concat()     array 뒤에 연장
let newFruits = fruits.concat('mango', 'orange');
console.log(fruits);
console.log(newFruits);

// 3-2 join()       각 객체를 나열할 때 사이에 끼워넣을것
console.log(`내가 갖고 싶은 차는 ${cars.join(' , ')}입니다.}`);

// 3-3 pop()*      *자기 파괴적 메소드
console.log(cars.pop());        // 맨 뒤에 있는 요소를 적출
console.log(cars);

// 3-4 push()*
cars.push('Volkswagen');
cars.push('Hyundai');
console.log(cars);

// 3-5 reverse()*
cars.reverse();
console.log(cars.reverse());

// 3-6 sort()*
let numbers = [34, 56, 12, 20, 64, 46, 72];
// 오름차순(Assending order)
numbers.sort();
console.log(numbers);
cars.sort();
console.log(cars);

//내림차순 (Descending order)
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);
cars.sort(function (a, b) {
    if (a < b)
        return 1;
    if (a > b)
        return -1;
    return 0;
})
console.log(cars);

let person = [
    { name: 'james', age: 30, job: 'programmer' },
    { name: 'maria', age: 24, job: 'student' },
    { name: 'brian', age: 27, job: 'teacher' }
];
// 이름의 알파벳 오름차순으로 정렬
person.sort((a, b) => {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
});
//  나이의 내림차순으로 정렬
person.sort((a, b) => b.age = a.age);
console.log(person);

// 3-7 slice()
console.log(fruits);
console.log(fruits.slice(0, 2));

// 4. 응용
// 4-1 문자열 뒤집기
let str = 'Hello, Javascript';
console.log(str.split('').reverse().join(''));

// 4-2 어떤 문자열이 회문(palindrome)인가
function isPailindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}
console.log(isPailindrome('우영우'));
console.log(isPailindrome('소주 만병만 주소'));