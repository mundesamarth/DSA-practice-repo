/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

nums = [1, 12, -5, -6, 50, 3];
k = 4;
var findMaxAverage = function (nums, k) {
  let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = sum;

  for(let i = k; i< nums.length; i++){
    sum += nums[i] - nums[i-k];
    maxSum = Math.max(sum,maxSum);
  }
  return maxSum / k
};

console.log(findMaxAverage(nums, k));
