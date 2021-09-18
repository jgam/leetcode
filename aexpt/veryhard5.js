function squareOfZeroes(matrix) {
  // Write your code here.
	const lastIdx = matrix.length - 1;
	return hasSquareOfZeroes(matrix, 0, 0, lastIdx, lastIdx, {});
	console.log(matrix)
}

function hasSquareOfZeroes(matrix, r1,c1,r2,c2,cache){
	if(r1 >= r2 || c1 >= c2) return false;
	
	const key = r1.toString() + '-' + c1.toString() + '-' + r2.toString() + '-' + c2.toString();
	if(key in cache) return cache[key];
	
	cache[key] = isSquareOfZeroes(matrix,r1,c1,r2,c2) ||
		hasSquareOfZeroes(matrix,r1+1,c1+1,r2-1,c2-1,cache) ||
		hasSquareOfZeroes(matrix,r1,c1+1,r2-1,c2,cache) ||
		hasSquareOfZeroes(matrix,r1+1,c1,r2,c2-1,cache) ||
		hasSquareOfZeroes(matrix,r1+1,c1+1,r2,c2,cache) ||
		hasSquareOfZeroes(matrix,r1,c1,r2-1,c2-1,cache)
		
	return cache[key];
}

function isSquareOfZeroes(matrix,r1,c1,r2,c2){
	for(let row = r1; row <r2+1; row++){
		if(matrix[row][c1] !== 0 || matrix[row][c2] !== 0) return false;
	}
	for(let col = c1; col < c2+1; col++){
		if(matrix[r1][col] !==0 || matrix[r2][col] !==0) return false;
	}
	return true;
}

// Do not edit the line below.
exports.squareOfZeroes = squareOfZeroes;
