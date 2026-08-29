let nums = [1, 2, 3, 1];
const rob = (nums) => {
  let n = nums.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[n];
};

console.log(rob(nums));
