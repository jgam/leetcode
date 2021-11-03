/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    let dp = [];
    
    for(let i = 0; i < grid.length+1; i++){
        dp.push(new Array(grid[0].length+1).fill(0))
    }
    
    //initialize the dp
    for(let i = 1; i < dp[0].length; i++){
        dp[1][i] = grid[0][i-1] + dp[1][i-1]
    }
    
    for(let i = 1; i < dp.length; i++){
        dp[i][1] = grid[i-1][0] + dp[i-1][1]
    }   
    
    //do the dp
    for(let i = 2; i < dp.length; i++){
        for(let j = 2; j < dp[0].length; j++){
            dp[i][j] = grid[i-1][j-1] + Math.min(dp[i-1][j], dp[i][j-1])
        }
    }
    
    
    return dp[dp.length-1][dp[0].length-1]
};
