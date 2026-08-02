/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [1,1,2]
// nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {
    let write  = 1;
    let k = 1;
    for(let read = 1; read < nums.length; read++){
        if(nums[read] !== nums[write-1]){
            nums[write] = nums[read]
            nums[read] = "_"
            k++
            write++
        }
    }
    console.log(k)
};

removeDuplicates(nums)