function getMaxArea(height) {
  let size = 0;
  
  for (let i = 0; i < height.length; i++) {
      for (let j = i+1; j < height.length; j++) {
        // 1, 8
        // 1, 6
        // 1, 2 ... 차례대로 height[i]와 height[j] 중 낮은수를 체크하고 * (j-i)
        // size가 0일 경우의 수를 Math.max로 처리
        size = Math.max(Math.min(height[i], height[j]) * (j-i), size);
      }
  }
  return size;
}

getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);