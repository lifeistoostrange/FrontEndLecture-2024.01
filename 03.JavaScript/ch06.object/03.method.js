// 사물을 속성:속성값 들로 객체화
//      - 속성값에 동작 부여 가능 : method(객체안에서 사용되는 함수)

let object = {
    //  속성 attribute
    name: 'apple',
    price: 1000,

    // 메소드 method
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
}

console.log(object.name, object.price);
object.print();
