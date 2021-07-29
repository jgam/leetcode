function waterArea(heights) {
  // Write your code here.
	const waterLocals = []
	
	let curMax = heights[0]
	for(let i = 0; i < heights.length-1; i ++){
		if(curMax < heights[i]){
			curMax = heights[i]
		}
		waterLocals.push([curMax])
	}
	
	curMax = heights[heights.length-1]
	let ret = 0
	let curDots = 0
	for(let i = heights.length-2; i > 0; i--){
		if(curMax < heights[i]){
			curMax = heights[i]
		}
		curDots = waterLocals[i][0] < curMax ? waterLocals[i][0] : curMax
		curDots -= heights[i]
		if(curDots > 0){
			ret += curDots
		}
	}
	return ret
}

// Do not edit the line below.
exports.waterArea = waterArea;
