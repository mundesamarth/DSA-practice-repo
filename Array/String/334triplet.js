/**
 * @param {number[]} nums
 * @return {boolean}
 */
let nums = [1,2,3,4,5];
var increasingTriplet = function (nums) {
    let smallest = Infinity; 
    let middle = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if( i == 0 || nums[i] < smallest){
        smallest = nums[i]
    }
    else if(smallest <= nums[i]){
        middle = nums[i]
    }
    else{
        return true
    }
  }
  return false
};

increasingTriplet(nums);
