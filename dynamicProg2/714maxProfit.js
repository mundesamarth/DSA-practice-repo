let prices = [1,3,7,5,10,3];
let fee = 3;
const maxProfilt = (prices, fee) => {
  let n = prices.length;
  let dp = Array.from({ length: n }, () => new Array(2).fill(0));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);

    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  console.log(dp)
  return dp[n-1][0]
};

console.log(maxProfilt(prices, fee));
