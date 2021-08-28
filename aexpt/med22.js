function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
	const curArrs = []
	
	for(let i =0; i < height; i++){
		const newArr = []
		for(let j =0; j < width; j++){
			newArr.push(1)
		}
		curArrs.push(newArr)
	}
	
	
	for(let i = 1; i<height; i++){
		for(let j =1; j<width; j++){
			curArrs[i][j] = curArrs[i-1][j] + curArrs[i][j-1]
		}
	}
  return curArrs[curArrs.length-1][curArrs[0].length-1];
}

// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;
