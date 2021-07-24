function maxProfitWithKTransactions(prices, k) {
  // Write your code here.
	
	const maxArr = []
	
	for(let i = 0; i < k+1; i++){
		maxArr.push(new Array(prices.length).fill(0));
	}
	
	var retMax = 0;
	for(let i = 1; i < k+1; i ++){
		for(let j = 1; j < prices.length; j++){
			var curMax = -Infinity
			for(let z = 0; z < j; z++){
				curMax = Math.max(curMax, -prices[z] + maxArr[i-1][z])
			}
			
			maxArr[i][j] = Math.max(maxArr[i][j-1], prices[j]+curMax)
			retMax = Math.max(retMax, maxArr[i][j])
		}
	}
	console.log(maxArr)
	return retMax
}
// Do not edit the line below.
exports.maxProfitWithKTransactions = maxProfitWithKTransactions;
