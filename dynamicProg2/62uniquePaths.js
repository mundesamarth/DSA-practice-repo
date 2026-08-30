let m = 3;
let n = 7;
const uniquePaths = (m,n) =>{
    let dp = Array.from(
        {length:m},
        () => new Array(n).fill(1)
    );

    for (let row = 1; row < m; row++){
        for(let col = 1; col < n; col++){
            dp[row][col] = 
            dp[row-1][col]+dp[row][col-1]   
        }
    }
    return dp[m-1][n-1]
}

console.log(uniquePaths(m,n))