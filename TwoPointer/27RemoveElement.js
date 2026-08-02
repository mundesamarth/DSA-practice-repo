/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
nums = [3,2,2,3]
 val = 3
var removeElement = function(nums, val) {
    let write = 0;

    for(let read = 0; read < nums.length ; read++){
        if(nums[read]!==val){
            nums[write] = nums[read]
            write++
        }
    }
    console.log(write)
};

removeElement(nums,val)