let nums = [-4,-1,0,3,10]

var sortedSquares = function(nums) {
    let result = []

    for(let i = 0; i < nums.length; i++){
        result.push(nums[i] * nums[i] )
    }
    result.sort((a,b)=>a-b)
    return result;
};

console.log(sortedSquares(nums))