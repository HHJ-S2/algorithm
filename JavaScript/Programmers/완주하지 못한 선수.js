/**
 * 효율성 0점 코드
 * comp 에 반복문을 돌려서 part 에 해당 요소가 있을경우 
 * spice 로 제거하고 남은 요소만 return
 */
function solution(part, comp) { 
  for (i=0; i<comp.length; i++){
    if (part.indexOf(comp[i]) > -1) {
      part.splice(part.indexOf(comp[i]), 1)
    }
  }
  return part.join(",");
}

/**
 * part, comp 배열 모두 정렬한 뒤 순차적으로 1 : 1 비교
 * 굳이 마지막 요소까지 확인하지 않아도 비완주자가 나오면 바로 반복문 종료 👍
 */
function solution(participant, completion) {
  participant.sort(); //참가자 배열 정렬
  completion.sort(); //완주자 배열 정렬
  for(var i=0;i<participant.length;i++){
      if(participant[i] !== completion[i]){
          //인덱스 0부터 순차적으로 두 배열 비교
          return participant[i];
          //비완주자가 참가자 배열에 나올 경우 출력
      }
  }
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);