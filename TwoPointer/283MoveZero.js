/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

nums = [0, 1, 0, 3, 12];
var moveZeroes = function (nums) {
  let write = 0;

  for(let read = 0; read < nums.length; read++){
    if(nums[read] != 0){
        nums[write] = nums[read];
        write++;
    }
  }

  while(write < nums.length){
    nums[write] = 0;
    write++;
  }
  console.log(nums)
}
moveZeroes(nums);
