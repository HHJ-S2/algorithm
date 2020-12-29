function solution(answers) {
  const obj = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  }
  
  for (let i in obj){
    // console.log(i, obj[i]);
    for (let j = 0; j < obj[i].length; j++){
      console.log(obj[i]);
      // console.log(obj[i][j]);
    }
  }
}

solution([1,2,3,4,5]);