/**
 * @param {number[]} height
 * @return {number}
 */

height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max_area = 0;
  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let currentArea = minHeight * width;
    max_area = Math.max(currentArea, max_area);
    
    if(height[left] < height[right]){
        left++;
    }
    else{
        right --;
    }
  }
  console.log(max_area)
};

maxArea(height);
