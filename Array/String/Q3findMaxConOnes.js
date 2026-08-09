let nums = [1, 0, 1, 1, 0, 1];

const findMaxConOnes = (nums) => {
  let counter = 0;

  let currentCounter = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 1) {
      currentCounter++;
    } else {
      currentCounter = 0;
    }

    counter = Math.max(counter, currentCounter);
  }
  return counter;
};

console.log(findMaxConOnes(nums));
