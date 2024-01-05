// 배열에 대한 함수 만들기

// 1. 배열을 인수로 받은 뒤 합을 반환하는 함수

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < sampleArray.length; i++) {
        sum += sampleArray[i];
    }
    return sum;
}

// 2. 배열에서 최대값을 찾아서 반환해주는 함수

function maxOfArray(arr) {
    let minVal = 100, maxVal = 0;
    for (let i = 0; i < arr.length; i++) {
        //최소값 찾기
        // if (sampleArray[i] < minVal) {
        //     minVal = sampleArray[i];
        // }
        //최대값 찾기
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
    // console.log(`Minimum : ${minVal}, Maximum : ${maxVal}.`)
}



let sampleArray = [43, 17, 25, 36, 98, 73];

console.log(sumOfArray(sampleArray));
console.log(maxOfArray(sampleArray));
console.log(sumOfArray(sampleArray) / sampleArray.length);

// 3. 배열 원소의 제곱의 합
function sumOfArraySquare(arr) {
        let sum = 0;
        for (let i = 0; i < sampleArray.length; i++) {
            sum += sampleArray[i] * sampleArray[i];
        }
        return sum;   
}
console.log(sumOfArraySquare(sampleArray));