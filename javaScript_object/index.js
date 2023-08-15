const uesr = {
    email: 'pvmma@naver.com', // 프로펄티
    birthdate: '2001-06-04', // 프로펄티
    buy(item) { // 메소드 (객체들의 행동)
        console.log(`${this.email} buys ${item.name}`)
    },
};

const item = {
    name : '샤프',
    price: 10000,
};

console.log(uesr.email);
console.log(uesr.birthdate);
uesr.buy(item);