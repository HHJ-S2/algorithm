/*
  에라토스테네스의 체를 활용하여 소수 찾기
  효율성 0점 
*/

function solution(n) {
  let numbers = [];
  
  // 0 ~ n 까지의 수를 배열에 push 한다.
  for (let i=1; i <= n; i++) numbers.push(i)
  
  // 이중 for문을 사용
  for (let j=1; j < numbers.length; j++){
    for (let k=1; k <= numbers.length; k++){
      // numbers에 1 * (1 + 1) !== -1
      // 즉, 4, 6, 8 ... 소수가 아닌 값이 배열에 있을경우
      if (numbers.indexOf(numbers[j] * (k + 1)) !== -1){
        // splice를 사용하여 배열에서 삭제 -> 이 로직이 효율성을 엄청 떨어뜨리는듯...
        numbers.splice(numbers.indexOf(numbers[j] * (k + 1)), 1);
      }
    }
  }
  
  numbers.shift();
  return numbers.length;
}

/* 
  다른 사람 풀이
*/
function solution(n) {
  var result = 0;
  
  for(var i=2; i <= n; i++){
    for(var j=2; j<i; j++){
      
      console.log (i, j, result);
      // 3, 2, 0
      // 4, 2, 1
      // 5, 2, 1
      // 6, 2, 1 => break
      // 5, 3, 1
      // 6, 2, 2
      // 7, 2, 2 ...
      
      if(i % j == 0) break;
      if(i == j + 1) result++;
    }
  }
  return result+1; // n이 1이상의 정수라는 가정하에
}


solution(10) // 4 [2, 3, 5, 7]