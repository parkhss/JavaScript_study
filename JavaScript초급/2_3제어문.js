let temperature = 0;

if (temperature <= 0){
    console.log('물이 업니다.')
} else if(temperature< 100) {
    console.log('물이 얼지도 끓지도 않습니다.')
} else {
    console.log('물이 끓습니다.')
}
// if문


let myChoice = 2;
switch(myChoice){
    case 1:
        console.log("토끼를 선택한 당신, ...")
        break;
    case 2:
        console.log("고양이를 선택한 당신, ...")
        break;
    case 3:
        console.log("코알라를 선택한 당신, ...")
        break;
    default:
        console.log("1에서 3사이의 숫자를 선택해 주세요")
}
// switch문


for (let i = 1; i <= 10; i++){ //(초기화부분; 조건부분; 추가동작부분)
    console.log(`${i} 인천유나이티드FC 최고!`) // 추가동작부분 꼭 채울필요 X
}                                            // 초기화부분 꼭 채울필요 X
// for문


let k = 30;
while(k % 7 !== 0){
    k++;
}
console.log(k);
// while문


for (let i = 1; i <= 10; i++){
    if(i%2===0){
        continue; //짝수는 continue되어 console이 무시됨
    }
    console.log(i);
}
while(i <= 10) {
    if(i%2 === 0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}
// break와 continue