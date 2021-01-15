/*
// 처음 시도했었던 코드

function solution(a, b) {
  const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
  const month = [31,29,31,30,31,30,31,31,30,31,30,31];
  let sum = 0;
  
  // 만약 a가 5라면 31+29+31+30 을 해야하는데
  // 반복문 조건을 이상하게 작성함.
  for (let i=1; i < a; i++){
    sum += month[i];
  }
  return day[(sum + b - 1) % 7];
}
*/

function solution(a, b) {
  // 2016년 1월 1일 요일인 FRI부터 나열
  const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
  // 각 월의 마지막 일수 나열
  const month = [31,29,31,30,31,30,31,31,30,31,30,31];
  let sum = 0;
  
  // 1~a 월까지의 마지막 일수를 더한다.
  for (let i=1; i<a; i++){
    sum += month[i-1];
  }
  
  // 일수(b-1)도 sum에 더해준다.
  sum += b-1;
  
  // sub % 7의 값을 day배열에서 찾는다.
  return day[sum % 7];
}

// Data 생성자 함수를 사용하면 엄청 간단하게 알 수 있다.
function solution2(a, b) {
  let answer = '';
  const date = new Date(`2016,${a},${b}`);
  let day= (date+"").split(' ');

  answer = day[0].toUpperCase();
  return answer;
}

solution(5, 24);
solution2(5, 24);
// result: "TUE"