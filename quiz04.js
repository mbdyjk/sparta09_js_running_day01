// 4. 계산기 문제
// switch-case 문을 사용하여 operator 입력값에 따라 분기를 나눠 출력
function calculate(num1, operator, num2) {
    switch(operator)
    {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return '잘못된 연산자를 입력받음';
    }
}

calculate(3, "+", 6); // 결과값 9
calculate(11, "-", 6); // 결과값 5
calculate(6, "*", 3); // 결과값 18
calculate(15, "/", 3); // 결과값 5