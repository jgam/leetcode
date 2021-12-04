/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    // using dynamic programming
    
    let dp = [[...costs[0]]];
    
    for(let i = 1; i < costs.length; i++){
        let curArr = [];
        for(let j = 0; j < costs[0].length; j++){
            let curIdx = 0;
            let curMinNum = Infinity;
            while(curIdx < costs[0].length){
                if(j !== curIdx){
                    curMinNum = Math.min(curMinNum, dp[i-1][curIdx]);
                }
                curIdx += 1;
            }
            curArr.push(curMinNum + costs[i][j]);
        }
        dp.push(curArr)
    }
    return Math.min(...dp[dp.length-1])
    
};
