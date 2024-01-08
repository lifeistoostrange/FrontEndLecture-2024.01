// 디지털 시계 00:00~23:59
// 하루동안 3이 표시되는 시간은 몇초인가?
// 답 2만7천어쩌구

function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}

function countHoursWithThree() {
    let count = 0;

    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            const time = twoDigit(hour) + ':' + twoDigit(minute);
            if (time.indexOf('3') !== -1) {
                count++;
            }
        }
    }
    return count * 60;
}

console.log(`하루에 3이 표시되는 초 : ${countHoursWithThree()}`);


