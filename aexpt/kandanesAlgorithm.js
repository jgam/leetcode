function kadanesAlgorithm(array) {
  // Write your code here.
	let curSum = 0;
	let curMax = 0;
	let maxNum = -Infinity
	for(let i = 0; i < array.length; i++){
		maxNum = Math.max(maxNum, array[i])
		curSum += array[i];
		curSum = Math.max(curSum, 0);
		
		curMax = Math.max(curMax, curSum)
	}
	
	return maxNum < 1 ? maxNum : curMax
}
