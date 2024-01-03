let h = Math.ceil(Math.random() * 24) - 1, m = Math.ceil(Math.random() * 60) - 1;


console.log(`상근식 알람 시간은 ${h}시${m}분 입니다.`);

m -= 45;

if (m < 0) {
    m = 60 + m;
    h--;
    if (h == -1)
        h = 23;
}

console.log(`창영식 알람 시간은 ${h}시${m}분 입니다.`);