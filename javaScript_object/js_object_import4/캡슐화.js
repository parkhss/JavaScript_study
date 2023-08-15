// 캡슐화 : 객체의 특정 프로퍼티에 직접 접근하지 못하도록 막는 것
class User {
    constructor(email, birthdate){
        this.email = email;
        this.birthdate = birthdate;
    }
    buy (item){
        console.log(`${this.email} buys ${item.name}`);
    }


   
    set email(address){  // email 프로퍼티 접근하는것 막음 
        if (address.includes('@')){
            this.email = address;
        } else {
            throw new Error('invalid email address')
        }

    }
}

const item = {
    name: '마우스',
    price: '5000',
}

const user1 = new User('pvmma@naver.com', '2001-06-04');
user1.email = 'abcdefg'
