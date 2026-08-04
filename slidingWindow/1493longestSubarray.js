/**
 * @param {number[]} nums
 * @return {number}
 */
nums =[1,1,1]

var longestSubarray = function(nums) {
    let l = 0;
    let max_value = 0;
    let countZ = 0;

    for(let r = 0; r < nums.length; r++){
        if(nums[r] === 0){
            countZ++;
        }

        while(countZ > 1){
            if(nums[l]===0){
                countZ--;
            }
            l++;
        }

        max_value = Math.max(max_value, r-l)
    }
    return max_value
};

console.log(longestSubarray(nums))