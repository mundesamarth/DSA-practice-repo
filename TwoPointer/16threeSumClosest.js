let nums = [-1, 2, 1, -4];
let target = -1;

const threeSumClosest = (nums, target) => {
  let closest = Infinity;
  let answer = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        console.log("sum",sum)
        let diff = Math.abs(sum-target);
        console.log("abs", Math.abs(sum-target))

        if(diff < closest){
            closest = diff;
            answer = sum;
        }
      }
    }
  }

  return answer;
};

console.log(threeSumClosest(nums, target));
