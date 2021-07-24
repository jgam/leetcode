function riverSizes(matrix) {
  // Write your code here.
	
	//first deep copy the 2d array matrix
	var curMatrix = matrix.map(function(arr){
		return arr.slice()
	})
	
	// looping and run dfs
	function dfs(curMat, index1, index2,curSize){
		curMat[index1][index2] = 0;
		
		if(index2 < curMat[0].length-1 && curMat[index1][index2+1] == 1){
			//then run dfs again to change
			curMat,curSize = dfs(curMat,index1, index2+1,curSize + 1)
		}
		if(index2 > 0 && curMat[index1][index2-1] == 1){
			curMat,curSize = dfs(curMat,index1, index2-1, curSize+1)
		}
		if(index1 > 0 && curMat[index1-1][index2] == 1){
			curMat,curSize = dfs(curMat,index1-1, index2,curSize+1)
		}
		if(index1 < curMat.length-1 && curMat[index1+1][index2] == 1){
			curMat,curSize = dfs(curMat,index1+1, index2,curSize+1)
		}
		
		return curMat,curSize
	}
	
	let curSize = 0
	const ret = []
	
	for(let i = 0; i < curMatrix.length; i++){
		for(let j =0; j < curMatrix[0].length; j++){
			if (curMatrix[i][j] == 1){
				curMatrix,curSize = dfs(curMatrix, i,j,1)
				ret.push(curSize)
			}
		}
	}
	
	return ret
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
