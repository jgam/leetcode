 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    
    for(let coin of coins){
        for(let x = coin; x < amount+1; x++){
            dp[x] = Math.min(dp[x], dp[x-coin]+1);
            
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
    
                                                                    
};
