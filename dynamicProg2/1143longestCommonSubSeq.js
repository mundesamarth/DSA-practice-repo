let text1 = "abcde"
let text2 = "ace"
const longestCommonSubSeq =(text1,text2) =>{
    let dp = Array.from(
        {length: text1.length+1},
        () => new Array(text2.length+1).fill(0)
    )
    for(let row = 1; row <= text1.length; row++){
        for(let col = 1; col <= text2.length; col++){
            if(text1[row-1] === text2[col-1]){
                dp[row][col] = dp[row-1][col-1]+1
            }else{
                dp[row][col]= Math.max(dp[row-1][col],dp[row][col-1])
            }
        }
    }
    return dp[text1.length][text2.length]
}
console.log(longestCommonSubSeq(text1,text2))