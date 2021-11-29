/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxSells = [];
    let curSellMax = -Infinity
    
    for(let i = prices.length-1; i > -1; i--){
        curSellMax = Math.max(curSellMax, prices[i])
        maxSells.unshift(curSellMax)
    };
    
    let maxProfit = -Infinity;
    for(let index in prices){
        
        maxProfit = Math.max(maxProfit, maxSells[index] - prices[index])
        
    }
    
    return maxProfit
};
