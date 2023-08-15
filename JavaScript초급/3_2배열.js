let tukorea =[       //배열(객체)
    'Tip기숙사',
    '산학융합관',
    'E동',
    '종합관',
]
console.log(tukorea[0]); //Tip기숙사 출력 

console.log(tukorea.length); //길이 (점표기법)
console.log(tukorea['length']);//길이 (대괄호표기법)
console.log(tukorea[tukorea.length - 1]); //마지막요소

tukorea[4] = "제2기숙사"; // 추가
console.log(tukorea[4]);
tukorea[2] = "컴공건물"; // 수정
console.log(tukorea[2]);
delete tukorea[4]; //삭제 (값 자체는 empty값으로 됨)
console.log(tukorea[4]);
// #1 배열


tukorea.splice(4, 1, "A동"); // 5번째 요소로 부터, 1개 제거, 삭제한 자리 값 추가
console.log(tukorea);
// #2 splice


tukorea.shift() // 배열의 첫 요소를 삭제
console.log(tukorea)
tukorea.pop() // 배열의 마지막 요소를 삭제
console.log(tukorea)
tukorea.unshift('처음요소') // 배열의 첫 요소로 값 추가
console.log(tukorea)
tukorea.push('마지막요소') // 배열의 마지막 요소로 값 추가
console.log(tukorea)
// #3 배열메소드


let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao')); // 배열에서 특정 값 찾기
console.log(brands.indexOf('Daum')); // 배열에서 특정 값 찾기 (포함 X : -1리턴)

console.log(brands.lastIndexOf('Kakao')); //뒤에서부터 특정 값 찾기
console.log(brands.lastIndexOf('Daum')); //뒤에서부터 특정 값 찾기 (포함 X : -1리턴)

console.log(brands.includes('Kakao')); // 특정 값이 있는지 확인 : true
console.log(brands.includes('Daum')); // 특정 값이 있는지 확인 : false

brands.reverse(); // 배열 뒤집기
console.log(brands);
// #4 배열메소드 팁


let alphabet = ['A', 'B', 'C', 'D']

for (let i = 0; i<alphabet.length; i++){ // 기존 for 문
    console.log(alphabet[i]);
}

for (let element of alphabet){ // for..of 반복문
    console.log(element);
}

for (let index in alphabet) {  // for..in 반복문 (배열 사용에는 비추)
    console.log(alphabet[index]) 
}
// #5 for..of 반복문


let two = [[1, 2], [3, 4]];
console.log(two[0][1])

let otherFridge ={  // 객체 활용
    fridge: {
        '채소층' : ['참외','토마토','오이','양파'],
        '반찬층' : ['볶음멸치', '장조림', '김치'],
        '음료층' : ['사이다', '콜라', '쥬스'],
        '과일층' : ['사과', '바나나', '청포도'],
    },
    freezer: {
        '얼음층' : ['얼음'],
        '아이스크림층' : ['찰떡아이스', '투게더', '메로나']
    }
};
// #6 다차원 배열