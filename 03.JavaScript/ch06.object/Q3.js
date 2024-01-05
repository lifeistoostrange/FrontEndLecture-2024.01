var array = [24, 67, 45, 97, 43];


function mainFuntion(sampleArray) {
    let sum1 = 0;
    let sum2 = 0;
    let gap = 0;

    for (let i = 0; i < sampleArray.length; i++) {
        sum1 += sampleArray[i];
    }
    sum1 = sum1 * sum1;

    for (let i = 0; i < sampleArray.length; i++) {
        sum2 += sampleArray[i] * sampleArray[i];
    }
    gap = sum1 - sum2;
    return gap;

}

console.log(`합의 제곱 - 제곱의 합은 ${mainFuntion(array)} 입니다.`);