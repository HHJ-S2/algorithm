/*
  문제를 읽어도 잘 이해가 안됨.
  테스트 코드 통과하지 못하고 미해결
*/

// 다른 사람 풀이
function solution(n, lost, reserve) {
  const realReserve = reserve.filter(r => !lost.includes(r));
  const realLost = lost.filter(r => !reserve.includes(r));
  // 여벌 체육복을 가져온 학생중에 체육복을 도난당한 사람이 있는지 판별한다.
  
  // 체육복을 빌려줄 수 있는 학생의 수를 구하는 로직
  const ableNum = realLost.filter(a => {
    // realLost의 학생 2, 4가 realReserve에 있는지 판별한다.
    return realReserve.find((b, i) => {
      // realReserve의 1, 3, 5가 
      // b === a-1 || b === a+1 조건식을 만족한다면 has = true
      // 반대의 경우 false 값을 반환한다.
      const has = b === a-1 || b === a+1;
      if (has) {
        // has = true일 경우 realReserve 배열에서 삭제한다.
        delete realReserve[i];
      }
      // true값을 반환한다.
      return has;
    });
  }).length;

  return n - (realLost.length - ableNum);
}

solution(5, [2, 4], [1, 3, 5]);