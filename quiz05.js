// 5. 점수 수정하기
const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];
const toAddNumber = 3;

// 점수 재계산 함수수
function recalcGrade(scores) {
    for (let i = 0; i < scores.length; i++) {
        scores[i] = addFunc(scores[i], toAddNumber);
    }
}

// 모든 배열의 항목에 대해 toAddNumber만큼 점수 추가 함수수
function addFunc(target, toAddNumber) {
    return target + toAddNumber;
}

recalcGrade(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]