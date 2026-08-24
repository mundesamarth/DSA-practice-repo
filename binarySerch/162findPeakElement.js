let nums = [1,2,1,3,5,6,4]


const findPeakElement = (nums) =>{
    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid-1]>nums[mid]){
            right = mid-1;
        }
        else if(nums[mid+1]>nums[mid]){
            left = mid+1;
        }
        else{
            return mid;
        }
    }

}

console.log(findPeakElement(nums))