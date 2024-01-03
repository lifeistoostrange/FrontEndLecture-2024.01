let today = new Date();
console.log(today);             //표준시
let hour = today.getHours();
console.log(hour);              //Timezone 적용
console.log(today.getMonth() + 1); // +1을 해줘야 월이 나옴

if (hour < 12)
    console.log(`오전 ${hour}시`);
else
    console.log(`오후 ${hour - 12}시`);