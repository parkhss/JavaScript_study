let millionaire = 1000000000;
let myNumber = 1e9; // 지수 표기법 (왼쪽 수를 오른쪽 수 만큼 10의 거듭제곱)
console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

console.log(16e-5 === 0.00016); //왼쪽 수를 오른쪽 수 만큼 10의 거듭제곱으로 나눠라

let hex1 = 0xff; // 16진법
let hex2 = 0xFF; // 16진법

let octal = 0o377; // 8진법

let binary = 0b11111111 // 2진법
// #1 다양한 숫자 표기법


let youNumber = 0.3591;
console.log(youNumber.toFixed(3)); // 소수 3자리까지
console.log(typeof youNumber.toFixed(3)); // String으로 출력
console.log(typeof Number(youNumber.toFixed(3))) //number로 변환
console.log(+youNumber.toFixed(3)) //number로 변환 다른방법

console.log(youNumber.toString(2)); //2진법으로 변환
console.log(youNumber.toString(8)); //8진법으로 변환
console.log(youNumber.toString(16)); //16진법으로 변환

console.log(255..toString(16)); // 숫자 바로 넣기 1
console.log((255).toString(16)); // 숫자 바로 넣기 2
// #2 숫자 메소드


let myString = ' Hi Coffee ';
console.log(myString.length); //문자열의 길이

console.log(myString[3]) // 3번째 문자열
console.log(myString.charAt[3]) // 3번째 문자열

console.log(myString.indexOf('f')) // 앞 부터 요소탐색
console.log(myString.lastIndexOf('f')) // 앞 부터 요소탐색

console.log(myString.toUpperCase()); // 대문자로 변환
console.log(myString.toLowerCase()); // 소문자로 변환

console.log(myString.trim()) // 양쪽 공백 제거

console.log(myString.slice(0,2)) // 부분 문자열 접근 (0번째~1번째)
console.log(myString.slice(3)) // 부분 문자열 접근 (3번째)
// #3 문자열


let number1 = [1, 2, 3]
let number2 = number1; // 참조형은 주소가 복사되는 개념
number2.push(4);
console.log(number1); // 즉 number1도 변경됨
console.log(number2);

let number3 = [1, 2, 3]
let number4 = number3.slice(); //number3만 복사하고 싶을 때
number4.push(4)
console.log(number3);
console.log(number4);

let course1 = {
    title: '파이썬 프로그래밍 기초',
    language: 'Python'
};
let course2 = course1;
course2.title = '알고리즘의 정석';
console.log(course1) // 객체도 주소가 복사되는 개념이라 똑같이 바뀜
console.log(course2)

let course3 = {
    title: '파이썬 프로그래밍 기초',
    language: 'Python'
};
let course4 = Object.assign({},course3); //course3만 복사하고 싶을 때
course2.title = '알고리즘의 정석';
console.log(course3) 
console.log(course4)
// #4 참조형


