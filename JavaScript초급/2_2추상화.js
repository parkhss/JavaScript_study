let x = 5;
x = x - 2; // 오른쪽에 있는 값을 왼쪽으로 할당 
console.log(x) // 3
x += 1; // x = x + 1 을 간략하게 
x ++; // x = x + 1 을 간략하게
console.log(x) // 5
//할당 연산자


function printSquare(x){
    console.log(x * x);
}
console.log(printSquare(3)) // 9와 undefinde 출력

function getSquare(x){
    return x * x
}
console.log(getSquare(3)) // 9 출력

function getSquare2(x){
    return x * x
}
getSquare2(3) // 아무것도 출력 X
// return과 console.log 차이


function introduce(name, nationality = '한국'){ // 파라미터 선언시 뒤에 넣어야됨
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`국적은 ${nationality}입니다.`);
}
introduce('페노메코'); // 파라미터 값 생략


let f1 = 3; // 글로벌 변수, 전역 변수
function myFunction(){ // 블록문
    let f2 = 4 // 로컬 변수, 지역 변수
    console.log(f2);
}
console.log(f1)
myFunction();
// Scope : 범위, 영역 -> 기준은 블록문


const pi = 3.14; // 상수 : const 
// 선언하고 수정할 수 없게함
// 처음에 값 선언 안할 시 오류
// 이름 지을 때 대문자, _ 로 작성하는 암묵적 규칙
