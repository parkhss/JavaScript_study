console.log("안녕?")

// 추상화 : 어떤 구체적인 존재를 원하는 방향으로 간략화해서 나타내는 것
// 핵심 -> 프로퍼티, 메소드의 이름을 명확하게 짓는것

// 잘못된 예시
class User {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    method1(i){
        console.log(`${this.a} buys ${i.name}`)
    }
}

// 옳은 예시
class User {
    constructor(email, birthdate){
        this.email = email;
        this.birthdate = birthdate;
    }
    buy (item){
        console.log(`${this.email} buys ${item.name}`);
    }
}
