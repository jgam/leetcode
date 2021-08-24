function minNumberOfJumps(array) {
  // Write your code here.
	
	// if loop through reversely, we know min jumps it takes to get to the final level
	if(array.length <= 1){
		return 0
	}
	
	const minArr = [1]
	
	// O(N)
	for(let i = array.length-2; i > -1; i--){
		if(array.length-1 <= array[i]+i){
			// this hits the last index
			minArr.unshift(1)
		}else{
			minArr.unshift(1+Math.min(...minArr.slice(0,array[i])))
		}
	}
	
	return minArr[0]
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;
