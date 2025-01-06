// 3. 홀짝 판별기
function isEvenOrOdd(num) {
    // 2로 나눈 나머지가 0이면 짝수, 아니면 홀수
    return num%2 == 0 ? '짝수' : '홀수';
}

console.log(isEvenOrOdd(10)); // 결과값 "짝수";
console.log(isEvenOrOdd(7)); // 결과값 "홀수";