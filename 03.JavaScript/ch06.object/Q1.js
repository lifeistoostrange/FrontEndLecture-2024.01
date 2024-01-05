var mybirthday = { age: 1998, birthmonth: 11, birthday: 23 };

var today = new Date();

var year = today.getFullYear(); // 년도
var month = today.getMonth() + 1;  // 월
var date = today.getDate();  // 날짜



function caculateAge(koreanage) {
    let realage = year - koreanage.age;
    if (koreanage.birthmonth > month) {
        if (koreanage.birthday >= date) {
            realage--;
        }
    }

    return realage;
}

console.log(`현재 날짜 ${year}년 ${month}월 ${date}일 기준으로`)
console.log(`이전 한국식 나이로는 ${year - mybirthday.age + 1}세 이며`);
console.log(`만 ${caculateAge(mybirthday)}세 입니다.`);