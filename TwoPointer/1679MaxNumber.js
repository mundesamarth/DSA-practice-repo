/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
((nums = [1,2,3,4]), (k = 5));
var maxOperations = function (nums, k) {
  let counter = 0;
  let left = 0;
  let right = nums.length - 1;
  let sortedArray = nums.sort((a, b) => a - b);
  console.log(sortedArray)
  while (left < right) {
    let sum = sortedArray[left] + sortedArray[right];
    if (sum == k) {
      counter++;
      left++;
      right--;
    }else if(sum < k) {
      left++;
    } else {
      right--;
    }
  }
  console.log(counter);
};

maxOperations(nums, k);
