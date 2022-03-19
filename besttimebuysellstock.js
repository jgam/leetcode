var maxProfit = function(prices) {
    let dp = {};
    
    function dfs(depth, buying){
        if(depth >= prices.length){
            return 0;
        }
        
        if(String([depth,buying]) in dp){
            return dp[String([depth,buying])]
        }
        
        let cd = dfs(depth+1, buying);
        
        if(buying){
            let buy = dfs(depth+1, !buying) - prices[depth];
            dp[String([depth,buying]) ] = Math.max(buy, cd)
        }else{
            let sell = dfs(depth+2,  !buying) + prices[depth];
            dp[String([depth,buying]) ] = Math.max(sell, cd)
        }
        return dp[String([depth,buying]) ]
    }
    
    let solution = dfs(0, true)
    
    return solution
};
