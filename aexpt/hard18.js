function maximumSumSubmatrix(matrix, size) {
  // Write your code here.
	let curMax = -Infinity
	
	const twoArrays = []
	if (size === 1){
		//return the max
		for(let i = 0; i < matrix.length; i++){
			for(let j=0;j<matrix[0].length;j++){
				curMax = matrix[i][j] > curMax ? matrix[i][j] : curMax
			}
		}
		return curMax
	}
	for(let i =0; i<matrix.length;i++){
		twoArrays.push(new Array(matrix[0].length).fill(0))
	}	
	
	for(let i = 0; i < matrix[0].length;i++){
		twoArrays[0][i] = matrix[0][i] + (i !== 0 ? twoArrays[0][i-1] : 0)
	}
	
	for(let i =0; i< matrix.length; i++){
		twoArrays[i][0] = matrix[i][0] + (i !==0? twoArrays[i-1][0] : 0)
	}
	
	console.log(twoArrays)
	
	for(let i=1; i<matrix.length;i++){
		for(let j=1; j<matrix[0].length;j++){
				twoArrays[i][j] = twoArrays[i-1][j] + twoArrays[i][j-1] - twoArrays[i-1][j-1] + matrix[i][j]
		}
	}
	
	// now check the maximum
	
	for(let i=size-1; i<twoArrays.length;i++){
		for(let j=size-1; j<twoArrays[0].length;j++){
			let curSum = -Infinity
			if(i === size-1 && j===size-1){
				curSum = twoArrays[i][j]
			}else if(i >= size && j >=size){
				//both then need 3 oeprations: 2 subtract + duplicate
				curSum = twoArrays[i][j] - twoArrays[i][j-size] - twoArrays[i-size][j] + twoArrays[i-size][j-size]
			}else if(i >= size){
				curSum = twoArrays[i][j] - twoArrays[i-size][j]
			}else if(j>=size){
				curSum = twoArrays[i][j] - twoArrays[i][j-size]
			}else{
				curSum = -Infinity
			}
			
			curMax = curSum > curMax ? curSum : curMax
			
		}
	}
	
  return curMax;
}

// Do not edit the line below.
exports.maximumSumSubmatrix = maximumSumSubmatrix;
