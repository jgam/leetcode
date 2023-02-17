/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let mins = [];
    let maxs = [];

    let current = prices[0];

    for(let i = 0; i < prices.length; i++){
        current = Math.min(current, prices[i]);
        mins.push(current);
    }

    current = prices[prices.length-1];
    for(let i = prices.length-1; i > -1; i--){
        current = Math.max(current,prices[i]);
        maxs.unshift(current)
    }

    let ret = -Infinity;
    for(let i = 0; i < maxs.length; i++){
        ret = Math.max(ret, maxs[i]-mins[i]);
    }
    return ret;
};
