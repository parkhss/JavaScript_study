// #1 데이터 타입 종류
// 기본형 : Number, String, Boolean, Null, Undefined
//         Symbol, BigInt
// 참조형 : Object
const user = Symbol("this is a user"); //synbol : 코드 내에서 유일한 값을 가진 변수이름
console.log(user == "this is user"); //false

console.log(9007199254740993n); //BigInt : 아주 큰 정수를 표현하기 위함 (2**53-1 이상. -(2**53-1 이하))



// #2 typeof 연산자
console.log(typeof null); // null이 아닌 object 출력

function sayHi(){
    console.log('Hi!?');
}
console.log(typeof sayHi); //object가 아닌 function 출력



// #3 불린 or 불린아닌 값
if ("happy_cat"){       // happy_cat을 true로 평가함
    console.log("happy happy happy! :) ")
}
// false로 평가되는 값 : false, null, undefined, NaN, 0, ''
// true로 평가되는 값 : 나머지값들 ([], {} 도 포함)
Boolean(false) //false
Boolean({}) //true (불린함수로 확인가능)



// #4 AND와 OR의 연산방식
// js에서 AND 연산자 : 왼쪽값 ture 하면 오른쪽값 출력, 왼쪽값이 false하면 그대로 왼쪽값 출력
console.log("Node.Js" && "JavaScript"); // JavaScript 출력
// js에서 OR 연산자 : 왼쪽값이 ture 하면 왼쪽 그대로, 왼쪽값이 false하면 오른쪽값 출력
console.log("Node.Js" || "JavaScript") // Node.js 출력
// AND, OR 우선순위 = AND가 우선순위 높음
console.log(true || false && false); // true
console.log((true || false) && false); // false



// #5 null 병합연산자 '??'
// 물음표 두 개(??)를 사용해서 null 혹은 undefined 값을 가려내는 연산자
// 연산자 왼편의 값이 null 이나 undefined라면 연산자 오른편의 값이 리턴
const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript'; // Codeit
// 연산자 왼편의 값이 null 이나 undefined가 아니라면 연산자 왼편의 값이 리턴
console.log(example1, example2, example3); // I love Codeit



// #6 변수와 스코프
console.log(title); // undefined
var title = 'codeit'; 
console.log(title); // codeit

//console.log(title2) 오류 뜸 (오류찾기 용이)
let title2; 
// 그외 중복선언 차이, 지역 전역 선언범위 차이 존재