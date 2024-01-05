// call back function
function callFiveTimes(callback) {
    for (let i = 0; i < 5; i++)
        callback();
}

// annonymous function
const cb = function() {
    console.log('함수가 호출되었습니다.');
}

callFiveTimes(cb);

// 함수를 호출할 때 익명함수를 만들어주는것이 일반적
callFiveTimes(function() {
    console.log('함수가호출되었습니다 2.');
});

// 익명 함수로 화살표 함수를 사용하는 것이 대중적
callFiveTimes(() => {
    console.log('함수가 호출되었습니다 3.');
});