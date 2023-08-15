//변수 선언
//일단 아래 코드 처럼 var 변수는 let 이나 const 처럼 똑같이 키워드 다음에 변수이름을 써서 선언할 수 있고,

var myVariable;

myVariable = 'codeit';
//혹은 키워드와 변수이름, 그리고 할당연산자와 값으로 선언과 동시에 값을 할당해 줄 수도 있습니다.

var myVariable = 'codeit';



//중복 선언 허용
//var 키워드로 선언한 변수의 첫 번째 문제는, let과 const와는 다르게 중복 선언이 가능하다는 겁니다.
//똑같은 이름으로 변수를 한 번 더 선언하게 되면, 에러가 발생하는 것이 아니라 그냥 기존의 변수를 덮어써 버리는 것이죠. 
//let키워드로 선언한 변수에 값을 재할당하는 것과는 엄연히 다릅니다.

var myVariable = 'codeit';
console.log(myVariable);
var myVariable = 'Codeit!';
console.log(myVariable);
//이렇게 변수가 중복선언이 되면, 길고 복잡한 코드를 작성할 때 실수를 할 가능성이 커지고, 상황에 따라서는 치명적인 오류가 발생할 수 있습니다.



//함수 스코프
//var 키워드 변수가 사라진 두 번째 문제는 Scope의 문제입니다. 
//let과 const 키워드로 선언한 변수는 if, for, function 등등 어떤 키워드와 관계없이 코드 블록, 
//즉 {} 중괄호로 감싸진 부분을 기준으로 scope를 갖게 되지만, var 키워드로 선언한 변수는 scope가 function에서만 구분되어 있습니다.

{
  let x = 3;
}

function myFunction() {
  let y = 4;
}

console.log(x);
console.log(y);

//let이나 const 키워드의 경우에는 중괄호로 감싸진 경우라면 모두 중괄호 밖에서는 지역 변수에 접근할 수 없습니다.

{
  var x = 3;
}

function myFunction() {
  var y = 4;
}

console.log(x);
console.log(y);

//하지만 var 변수는 지역변수의 구분이 함수에만 있기 때문에 if, for, while, switch 등 다양한 상황에서 선언한 변수가 자칫, 전역변수의 역할을 하게 될 수도 있는 것이죠.

//참고로 이렇게 함수를 기준으로만 적용되는 스코프를 함수 스코프, 코드 블록을 기준으로 적용되는 스코프를 블록 스코프라는 용어를 사용한다는 점도 참고해 주세요!



//끌어올림 (Hoisting)
console.log(myVariable);
let myVariable;
//let과 const로 선언한 변수는 선언되기 이전에 사용될 수 없습니다. 하지만, var 변수는 함수 스코프를 기준으로 선언되기 이전에도 변수에 접근이 가능한데요.

console.log(myVariable);
var myVariable;
//변수의 선언이 끌려 올라가서 마치, 2번째 줄과 첫 번째 줄이 바뀐 것처럼 동작하는 데요.

var myVariable;
console.log(myVariable);
//이렇게 변수가 끌어올려 지는 현상을 '호이스팅(hoisting)'이라고 부른다는 점도 기억해 두시면 좋을 것 같아요 !
//다행히 호이스팅은 선언과 동시에 값을 할당하더라도, 선언문만 올려지기 때문에 값은 그대로 두 번째 줄에 남아있는 데요.

console.log(myVariable);
var myVariable = 2;
console.log(myVariable);
//하지만 이런 식으로 동작하는 방식은 코드의 흐름을 방해하기에 충분해 보이죠? 한 가지 주의해야 될 부분은, 함수를 선언할 때도 이 호이스팅이 적용됩니다.

sayHi();

function sayHi() {
  console.log('hi');
}
//이렇게 코드를 작성하더라도 실행해보면,

//당연한 듯 함수가 잘 실행되는 모습을 확인할 수 있습니다.

//이런 현상은 함수를 한 번 선언하고 나면 어디서든 유연하게 사용할 수 있다는 장점이 있지만, 코드의 흐름에는 부정적인 영향을 끼칠 수 있습니다. 그래서 함수를 선언할 때는 가급적 코드 윗부분에 선언하거나, 호출을 항상 아래쪽에서 한다거나 나름대로 규칙을 세워서 코드를 작성하시기를 권장드립니다.

