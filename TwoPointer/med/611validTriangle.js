let nums = [4,2,3,4];
var validTriangle = function (nums) {
  let count = 0;
  nums.sort((a,b) => a-b);

  for(let k = nums.length-1; k >= 2; k--){
    let left = 0;
    let right = k-1;

    while(left < right){
        if(nums[left]+nums[right] > nums[k]){
            count += right-left;
            right--;
        }else{
            left++;
        }
    }
  }

  return count;
};

console.log(validTriangle(nums));
