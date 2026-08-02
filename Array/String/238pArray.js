/**
 * @param {number[]} nums
 * @return {number[]}
 */
nums = [1, 2, 3, 4];
var productExceptSelf = function (nums) {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        prod *= nums[j];
        console.log(prod)
      }
    }
    answer.push(prod);
  }
  // console.log(prod)
  console.log(answer);
};

productExceptSelf(nums);
