/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
k = 2;
var longestOnes = function (nums, k) {
  let l = 0;
  let countZ = 0;
  let max_Len = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) {
      countZ++;
      while (countZ > k) {
        if (nums[l] === 0) {
          countZ--;
        }
        l++;
      }

      max_Len = Math.max(max_Len, r-l+1);
    }
  }
  return max_Len;
};

console.log(longestOnes(nums, k));
