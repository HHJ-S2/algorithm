function solution(numbers) {
  let answer = [];
  
  // 이중 for문을 사용해서 [i]와 [j]의 값을 차례대로 더한후 answer에 push한다.
  for (let i=0; i < numbers.length; i++){
    for (let j= i+1; j < numbers.length; j++){
      answer.push(numbers[i] + numbers[j]);
    }
  }
  
  // answer에서 중복되는 값을 제거한다.
  // Set => ES6 에서 등장한 data object로 배열에 넣게되면 중복되는 값이 사라진다.
  let newArray = [...new Set(answer)];
  
  // 오름차순으로 정렬 후 return한다.
  return newArray.sort((a, b) => a - b);
}

solution([2,1,3,4,1]);