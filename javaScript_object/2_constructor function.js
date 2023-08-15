function User(email, birthdate){
    this.email = email;
    this.birthdate = birthdate;
    this.buy = function(item){
        console.log(`${this.email} buys ${item.name}`);
    };
}

const item = {
    name: '마우스',
    price: '5000',
}

const user1 = new User('pvmma@naver.com', '2001-06-04');
console.log(user1.email);
console.log(user2.birthdate);
user1.buy(item)