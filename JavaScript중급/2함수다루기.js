// #1 함수 만드는 방법
// 1-1 (함수선언) 
// 선언순서 상관없이 가능 (호이스팅)
function printCode1(){
    console.log('함수선언')
}
// 1-2 (함수표현식) 
// 선언이후 사용가능
// 변수 스코프 활용가능
const printCode2 = function (){
    console.log('함수표현');
};
printCode2();



// #2 파라미터 parmeter
function greeting(name/*파라미터*/) {
    console.log(`Hi! My name is ${name}`)
}
greeting('황의조' /*arguments*/);

function defaultTest(x, y = x+3){
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
};
defaultTest(2); //두번째값 생략되서 y는 기본값 사용
defaultTest(2, 3); // 두번째값이 존재하여 두번째값 사용




// #3 아규먼트 arguments
function printArguments(a, b, c){ // 파라미터를 arguments로 하는건 피해야함
    console.log(arguments[0]); 
    console.log(arguments[1]);
    console.log(arguments.length); 
    console.log('----------------')
}
printArguments('a', 'b', 'c')
printArguments('강')
printArguments('서울','인천')

function printArguments1(a,b,c){ // 또다른 arguments 활용예시
    for (const arg of arguments){
        console.log(arg);
    }
    console.log('________')
}
printArguments1('d', 'e', 'f')
printArguments1('호수')
printArguments1('강릉','여수')



// #4 Rest Parameter 
// arguments는 유사 배열이기때문에 배열 사용불가 : Rest Parameter 를 사용하면 됨
function printArguments3(...args){
    for (const arg of args){
        console.log(arg);
    }
    console.log('________')
}
printArguments3('d', 'e', 'f')
printArguments3('호수')
printArguments3('강릉','여수')

function printRank(frist, second, ...others){ // Rest Parameter를 일반 파라미터랑 같이 사용하려면 맨끝에 사용해야함
    console.log('아시안컵 최종 결과');
    console.log(`우승:${frist}`);
    console.log(`준우승:${second}`);
    for (const arg of others){
        console.log(`참가자:${arg}`);
    }
}
printRank('대한민국', '일본', '사우디', '이란', '베트남'); 



// #5 Arrow Function
// 변경전
const getTwice = function(getnumber){
    return getnumber * 2;
};
console.log(getTwice(5));

// 변경후 (function 지우고 파라미터 옆에 '=>' 추가하기)
const getTwice1 = (getnumber) => {
    return getnumber * 2;
};
console.log(getTwice1(5));

// return 생략가능
const getTwice2 = getnumber => getnumber * 2;

console.log(getTwice2(5));

// return값이 객체인 경우 : 소괄호 '()' 둘러주기
const getbread = () => ({breadName: '맛스타'});
console.log(getbread())
// Arrow functuon이 일반함수와 차이점
// = arguments 객체가 없고, this가 가리키는 값이 일반 함수와 다르다는 점



// #6 this 
// 객체 메소드 만들때 사용
function getFullName(){
    return `${this.fristName} ${this.lastName}`;
}

const user = {
    fristName: 'Lee',
    lastName: '강인',
    getFullName : getFullName,
}

const admin = {
    fristName: 'Son',
    lastName: '흥민',
    getFullName : getFullName,
}
console.log(user.getFullName())
console.log(admin.getFullName())