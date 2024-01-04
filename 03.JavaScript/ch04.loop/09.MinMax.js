// 1에서 99사이의 값을 갖는 배열에서 최소값, 최대값 구하기

let numbers = [3, 56, 43, 25, 68, 19];
// Math.max();, Math.min(); 없이 최소 최대값 찾기

let minVal = 100, maxVal = 0;
for (let number of numbers) {
    //최소값 찾기
    if (number < minVal) {
        minVal = number;
    }
    //최대값 찾기
    if (number>maxVal) {
        maxVal = number;
    }
}
console.log(`최소값 : ${minVal}, 최대값 : ${maxVal}`)