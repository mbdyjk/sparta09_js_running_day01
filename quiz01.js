// 1. 빈칸 채우기 문제
let uninitialized;
console.log(uninitialized); // 결과값: undefined, 이유: 초기화가 되지 않았다.


const apple = "사과"; // 답: const, 이유: 재할당이 불가능한 type인 const에 재할당시 아래와 같은 TypeError 발생
apple = "바나나"; // TypeError: Assignment to constant variable


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값: 19, 이유: 3번 index는 배열의 네번째 항목을 가리킨다. 

let mySchedule = "";
console.log(mySchedule || false); // 결과값: false, 이유: ""와 false는 falsy 값, || 연산자에 의해 false 값 리턴 
console.log(!!mySchedule); // 결과값: false, !! 연산자는 명시적으로 boolean 값을 리턴한다.
