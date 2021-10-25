/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = []
    if(n < 3){
        return n
    }
    
    dp[0] = 1
    dp[1] = 2
    for(let i = 2; i < n; i++){
        dp.push(dp[i-2] + dp[i-1])
    }
    return dp[n-1]
};
