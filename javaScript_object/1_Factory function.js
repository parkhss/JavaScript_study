function creatUser(email, birthdate){
    const user = {
        //email: email,
        email, //(위 처럼 프로펄티, 파라미터가 같으면 생략가능)
        //birthdate: birthdate,
        birthdate,
        buy(item){
            console.log(`${this.email} buys ${item.name}`);
        },
    };
    return user;
}
const item ={
    name:'옷',
    price:'15000',
}

const user1 = creatUser('abc@naver.com','1999-09-09');
const user2 = creatUser('jerry@naver.com', '2000-01-23');

console.log(user1.email);
console.log(user2.email);

user1.buy(item);
user2.buy(item);