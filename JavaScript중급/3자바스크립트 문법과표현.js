// #1 문장과 표현식
let x; 
x = 3;

if (x < 5) { // 5~9 변수 선언 문장
  console.log('x는 5보다 작다');
} else {
  console.log('x는 5와 같거나 크다');
}

for (let i = 0; i < 5; i++) { // 11~13 값 할당 문장
  console.log(i);
}
// 표현식 : 하나의 값이 되는 모든 코드



// #2 조건연산자
const CUT_OFF = 80;
function passChecker(score) {
    return score > CUT_OFF ? '합격!' : '불합격!';
}
console.log(passChecker(90));



// #3 Spread 구문
const numbers = [1, 2, 3]
console.log(numbers)
console.log(...numbers) // 각각의 값을 펄쳐 출력



// #4 구조분해
const rank = ['유나', '효준', '민환', '재하'];
//const macbook = rank[0]  기존 방법
//const ipad = rank[1]
//const airpods = rank[2]
//const coupon = rank[3]
const [macbook, ipad, airpods, coupon, etc = 'coffee 기프티콘'] = rank;

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(coupon);
console.log(etc);



// #5 구조분해 2
const coffee = {
  ediya: '아이스티',
  starbucks : '자바칩',
  mega : 2000,
  compose : 1500
};

//const ediya = coffee.ediya;      기존 방법
//const starbucks = coffee.starbucks;
const {ediya, starbucks, hollys} = coffee;
console.log(ediya);
console.log(starbucks);
console.log(hollys); //undefined 출력

const {mega : MGC, ...rest} = coffee
console.log(MGC);
console.log(rest);

const composeCoffee = 'compose'
const {[composeCoffee] : cpc} = coffee;
console.log(cpc);



// #6 함수와 Destructuring
function printCoffee({ediya, starbucks})  {
  console.log(`EDIYA 커피 중 대표 메뉴는 ${ediya} 입니다.`)
  console.log(`스타벅스 커피 중 대표 메뉴는 ${starbucks} 입니다.`)
};
printCoffee(coffee);



// #7 에러와 에러객체
// 1) ReferenceError : 존재하지 않는 변수나 함수 호출시
// 2) TypeError : 잘못된 방식으로 자료형을 다루려고 할때 
// 3) SyntaxError : 문법에 맞지않는 코드 작성 

const error = new TypeError('타입 에러가 발생했습니다.')
console.log(error.name)
console.log(error.message)

// throw error; 에러 발생시키기 



// #8 try catch
try{
  // 코드
  console.log('에러 전');

  const js = 'JavaScript';
  console.log(js)

  js = '자바스크립트'; // 오류 발생지점

  const java = 'Java';  // 이후 출력 X 
  console.log(java); 
} catch (err) {
  // 에러가 발생했을 때 동작할 코드
  console.log('에러 후')
  console.log(err)
  console.log(err.name)
  console.log(err.message)
  console.error(err) // 실제 오류 출력
} 
finally {
  // 항상 실행할 코드
  const end = new Date();
  const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
  console.log(msg);
}

// try-catch문은 SyntaxError에서는 실행 불가능