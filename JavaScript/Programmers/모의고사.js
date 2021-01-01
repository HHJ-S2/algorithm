function solution(sol){
  let answer = [];
  const supo = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let point = [0, 0, 0];
  
  // sol을 돌면서 수포자들의 답과 일치하는지 체크한다.
  // 일치하면 point에 순서대로 +1 해준다.
  for (let i=0; i < sol.length; i++){
    if (sol[i] == supo[0][i % supo[0].length]){
      point[0]++;
    }
    if (sol[i] == supo[1][i % supo[1].length]){
      point[1]++;
    }
    if (sol[i] == supo[2][i % supo[2].length]){
      point[2]++;
    }
  }
  
  // 최대값을 구하고 변수 max에 담는다.
  const max = Math.max(...point);
  
  // point배열을 돌면서 max값과 같은 수포자를 찾아서 순서대로 answer배열에 담는다.
  for (let k=0; k < point.length; k++){
    if (point[k] === max){
      answer.push(k+1);
    }
  }
  
  return answer;
}

solution([1, 2, 3, 4, 5]);