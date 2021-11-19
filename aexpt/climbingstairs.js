var climbStairs = function(n) {
    let dp = [0,1,2,3]
    
    if(n > 3){
        for(let i = 3; i < n; i++){
            dp.push(dp[i] + dp[i-1])
        }
    }
    return dp[n]
    
};
