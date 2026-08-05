nums = [2, 3, -1, 8, 4]
const pivotIndex = (nums) => {
    let totalSum = 0;

    for(let num of nums){
        totalSum += num;
    }

    let leftSum = 0;

    for(let i = 0; i < nums.length; i++){
        let rightSum = totalSum-leftSum-nums[i];

        if(leftSum === rightSum){
            return i
        }

        leftSum += nums[i];
    }
    return -1
}

console.log(pivotIndex(nums))