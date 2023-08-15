console.log("He said \"I'm Iron man\'")
// He said "I'm Iron man'


console.log('Codeit' === 'Codeit');
console.log('Codeit' !== 'Codeit');

console.log(true && false); //AND 연산
console.log(true||false); // OR 연산

console.log(!!true) // NOT 연산
// 불린 (Boolean)


console.log(typeof 101); //number
console.log(typeof 'codeit'); // string
// typeof = 해당하는 자료형 출력


console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

console.log(Boolean('x')) // '', 0, NaN -> false
// 형변환 1


console.log(4 - true); // true가 1이 됨 : 3
console.log(4 * false); // false가 0 이 됨 : 0
console.log(4 / '2'); // '2'가 숫자형으로 바뀜
console.log(4 % 'two'); // 'two'가 NaN값

console.log('two' >= 1); // 연산 불가능할 시 false

console.log(1 === '1'); // === 는 형변환 X
console.log(1 === true);
console.log(1 == '1'); // == 에서는 형변환
console.log(1 == true);
// 형변환 2


let year = 2018;
console.log(`생년월일은 ${year}`); // 따옴표가 아닌 `으로 넣어야함 

let myNumber = 3;
function getTwice(x) {
    return x * 2
}
console.log(`${myNumber}의 두배는 ${getTwice(myNumber)}입니다.`)
// 탬플릿 문자열


let codeit;
console.log(codeit); // undefined 선언은 했으나 값이 없다
codeit = null;
console.log(codeit); // null 의도적으로 값이 없음을 알림
// null, undefined