let tukorea = {         // 객체
    name: '한국공대',
    bornYear: 1997,
    campus: {
        campus_1 : '제1캠퍼스',
        campus_2 : '제2캠퍼스'
    }
};  
console.log(tukorea.name) //점 표기법
console.log(tukorea['bornYear']) // 대괄호 표기법

let propertyName = 'name';
console.log(tukorea[propertyName]);

console.log(tukorea.campus.campus_1);
console.log(tukorea.campus[`campus_2`]);
// #1 객체와 프로퍼티


tukorea.name = '한국공학대'; //수정
console.log(tukorea.name); 
tukorea.student = "박O수";  //추가
console.log(tukorea.student);
delete tukorea.student;    //삭제
console.log(tukorea.student);

console.log(tukorea.bornYear !== undefined) // 존재유무
console.log('bornYear' in tukorea)          // 존재유무
// #2 객체 다루기


let greetings = {               // 메소드
    sayHello: function(name){
        console.log(`Hello ${name}!`);
    },
    sayHi : function(){
        console.log(`Hi!`);
    }
}
greetings.sayHello('손흥민'); //점표기법
greetings['sayHello']('이강인'); //대괄호표기법
// #3 객체와 메소드


let subject ={
    name: '수학',
    score: 97,
    title : '미분과 적분'
}
for (let k in subject){
    console.log(k);          //점표기법
    console.log(subject[k]); //대괄호표기법
}
// #4 for...in 반복문


let myDate = new Date(); // 현재시간
console.log(myDate);

let myDate1 = new Date('2023-06-04'); //시간 지정
let myDate2 = new Date('2023-07-10T00:00:01'); // 시간 지정 초까지
console.log(myDate1);
console.log(myDate2);

let myDate3 = new Date(2023, 3, 5, 1, 2, 3); // month는 0부터 시작
console.log(myDate3);
// #5 Date 객체


let today = new Date(2112, 7, 24); //예제
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
	let result = today.getTime() - jaeSangStart.getTime()
	let dayDiff = result / 1000 / 60 / 60 / 24;
	
	console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);