function solution(n) {
  let answer = '';

  // n의 개수만큼 반복문을 실행한다.
  for (let i=1; i <= n; i++){
    // answer의 길이가 홀수면'박', 짝수면 '수'를 추가한다.
    if (answer.length % 2){
      answer += '박';
    } else {
      answer += '수';
    }
  }
  
  return answer;
}

function waterMelon(n){
  // n을 2로 나눈 몫 만큼 '수박'을 반복한다.
  // n을 2로 나누고 나머지가 있으면 '수'를 더한다.
  return ("수박").repeat(n/2) + ((n%2) ? '수' : '');
}

// '수박'을 n만큼 반복하고 slice
const waterMelon = n => "수박".repeat(n).slice(0,n);

solution(3);