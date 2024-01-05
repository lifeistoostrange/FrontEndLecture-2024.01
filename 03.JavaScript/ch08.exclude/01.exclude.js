// 에러가 발생하면 프로그램 실행이 중지


//error.error.error()

try {
    error.error.error()         //에러 발생이 유력한 코드를 try - catch 블록안에 작성
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}


console.log('여기가 끝이다람쥐.');