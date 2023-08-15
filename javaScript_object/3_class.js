class User {
    constructor(email, birthdate){  // 생성자
        this.email = email;          // 생성되는 객체 
        this.birthdate = birthdate;  // 생성되는 객체 
    }
    
    buy(item){    // 해당객체 메소드
        console.log(`${this.email} buys ${item.name}`);
    };
}

const item = {
    name: '마우스',
    price: '5000',
}

const user1 = new User('pvmma@naver.com', '2001-06-04');
console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item)

const user2 = new User('pvmma@naver.com', '2001-06-04');
console.log(user2.email);
console.log(user2.birthdate);
user2.buy(item)