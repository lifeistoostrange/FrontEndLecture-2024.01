// 타이머 내장 함수

setTimeout(function() {
    console.log(`3초 경과`);
}, 3000);

const si = setInterval(function() {
    console.log(new Date());
}, 1000);

setTimeout(() => {
    console.log(`5초 경과. 시계 정지.`);
    clearInterval(si);
}, 5100);