/*
  효율성 0점 
*/
function solution(n) {
  let numbers = [];
  
  for (let i=1; i <= n; i++){ numbers.push(i) }
  
  for (let j=1; j < numbers.length; j++){
    for (let k=1; k <= numbers.length; k++){
      if (numbers.indexOf(numbers[j] * (k + 1)) !== -1){
        numbers.splice(numbers.indexOf(numbers[j] * (k + 1)), 1);
      }
    }
  }
  
  let answer = numbers.filter(val => val !== 1);
  
  return answer.length;
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
  return result+1; //n이 1이상의 정수라는 가정하에
}


solution(10) // 4 [2, 3, 5, 7]