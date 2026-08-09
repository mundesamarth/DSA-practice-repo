/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

let nums = [2, 5, 1, 3, 4, 7];
let n = 3;
var shuffle = function (nums, n) {
  let ans = [];
  let list1 = nums.slice(0, n);
  let list2 = nums.slice(n);

  for (let i = 0; i < list1.length; i++) {
    ans.push(list1[i]);
    ans.push(list2[i])
  }

  return ans;
};

console.log(shuffle(nums, n));
