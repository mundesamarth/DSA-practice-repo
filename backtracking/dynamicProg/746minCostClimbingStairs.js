// let cost = [10,15,20];
let cost = [1,100,1,1,1,100,1,1,100,1];
const minCostClimbingStairs = (cost) =>{
    let len = cost.length;
    let dp = new Array(len+1).fill(0);

    dp[0] = 0;
    dp[1]=0;

    for(let i = 2; i <= len; i++){
        dp[i] = Math.min(
            dp[i-1]+cost[i-1],
            dp[i-2]+cost[i-2]
        )
    }
    return dp[len]

}

console.log(minCostClimbingStairs(cost))