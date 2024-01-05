// 완전수 구하기

// 자기 자신을 제외한 약수의 합을 구하는 함수

function sumOfDivisors(num) {
    for (let i = 2; i <= num; i++) {
        var sum = 0;
        for (let j = 1; j < i; j++) {

            if (i % j == 0) {
                sum += j;
            }
        }
    }
    if (num == sum)
        console.log(`${num}은 완전수입니다.`);
    
    return sum;
}
function findPerfectNumber() {
    let perfectNumbers = [];
    for (let i = 2; i <= 10000; i++) {
        let sum = 0;
        for (let j = 1; j < i; j++) {
    
            if (i % j == 0) {
                sum += j;
            }
        }
        if (sum == i) {
            perfectNumbers.push(i);
        }
    }
    console.log(`1부터 10000 사이에 완전수는${perfectNumbers}이 있습니다`);
    
}




console.log(sumOfDivisors(28));
console.log(findPerfectNumber());


//2에서부터 10000사이의 완전수 구하기
