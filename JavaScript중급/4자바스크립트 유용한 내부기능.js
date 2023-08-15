// #1 forEach와 map
const members = ['유중혁', '김독자', '유상아'];
for (let member of members){  // 기존 for of 문
    console.log(`${member}님이 입장하셨습니다.`);
}

//단순히 배열의 반복작업이 필요 : forEach
members.forEach(function(member, i /*인덱스*/, arr /* 반복적인 배열 전달*/){ // forEach
    console.log(`${i} ${member}님이 입장하셨습니다.`);
    console.log(arr)
});

// 반복작업으로 새로운 배열이 필요 : map (아규먼트로 전달한 콜백 함수를 배열의 길이 만큼 반복해서 실행하는 메소드)
const firstName = ['중혁', '독자', '상아']
const lastName = ['유', '김', '유']
const fullNames = firstName.map((firstName, i) => lastName[i] + firstName); 
console.log(fullNames);

const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING']; //map 예시
const answer = quiz.map((word, i) => word[i])
console.log(answer);



// #2 filter와 find
const hamhamburger = [
    {name : '와퍼주니어', brand : '버거킹'},
    {name : '빅맥', brand : '맥도날드'},
    {name : '1955', brand : '맥도날드'},
    {name : '치즈와퍼', brand : '버거킹'},
    {name : '치즈버거', brand : '맥도날드'},
    {name : '콰트로와퍼', brand : '버거킹'},
    {name : '맥치킨', brand : '맥도날드'},
    {name : '통새우와퍼주니어', brand : '버거킹'},
    {name : '불고기와퍼', brand : '버거킹'},
]

const burgerKing = hamhamburger.filter((el) => el.brand === '버거킹')
console.log(...burgerKing); // filter는 return값이 배열

const myHamburger = hamhamburger.find((el) => el.name === '치즈와퍼')
console.log(myHamburger) // find는 return값이 값, 요소 찾으면 반복 종료

const notCheeze = hamhamburger.filter((el) => {
    return el.name[0] !== '치' })
console.log(...notCheeze)



// #3 some과 every
const numbers = [1, 3, 5, 7, 9];
const someReturn = numbers.some((el) => el > 5);
// some : 조건을 만족하는 요소 1개 이상있는지 
const everyReturn = numbers.every((el) => el > 5);
// every : 모든 요소가 조건을 만족하는지 (조건 만족하지 않는 요소가 1개라도 있는지)

console.log('some:', someReturn)
console.log('every:', everyReturn)

const someReturn1 = numbers.some((el, i) => { // 예시
    console.log('some:', i);
    return el > 5;
});
const everyReturn1 = numbers.every((el, i) => {
    console.log('every:', i);
    return el > 5;
})

console.log('some:', someReturn1)
console.log('every:', everyReturn1)



// #4 reduce
const num = [1, 2, 3, 4];
const sumAll = num.reduce((acc, el, i, arr) => {
    console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다`)
    console.log('acc:', acc);
    console.log('el:', el);
    console.log('-----------');

    return acc + el;
}, 0);
console.log('sumAll:', sumAll)



// #5 sort, reverse
// sort : 배열 정렬
const numbers2 = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers2.sort((a, b) => a - b);
console.log(numbers2); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers2.sort((a, b) => b - a);
console.log(numbers2); // (5) [36000, 21, 10, 4, 1]
// reverse : 배열의 순서를 뒤집어 주는 메소드