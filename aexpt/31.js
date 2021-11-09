function removeIslands(matrix) {
	const mat = []
	for(let i = 0; i < matrix.length; i++){
		const eachMat = [];
		for(let j = 0; j < matrix[0].length; j++){
			eachMat.push(matrix[i][j])
		}	
		mat.push(eachMat)
	}
	console.log(mat)
	function dfs(i, j, arr){
		if(i < 0 || i > arr.length-1){
			return;
		}
		if(j < 0 || j > arr[0].length-1){
			return;
		}
		if(arr[i][j] === 1){
			arr[i][j] = 0;
			return dfs(i+1,j,arr) + dfs(i-1,j,arr) + dfs(i,j+1,arr) + dfs(i, j-1,arr);
		}
	}
	for(let i = 0; i < mat.length; i++){
		console.log('i,j',i)
		if(i === 0 || i === mat.length-1){
			for(let j = 0; j < mat[0].length; j++){
				if(mat[i][j] === 1){
					dfs(i,j,mat)
				}
			}
		}else{
			if(mat[i][0] === 1){
				if(mat[i][mat[0].length-1] === 1){
					dfs(i,0,mat) + dfs(i, mat[0].length-1,mat)				
				}
				dfs(i, 0,mat)	
			}
			if(mat[i][mat[0].length-1] === 1){
				dfs(i, mat[0].length-1,mat)
			}
		}
	}
	
	for(let i = 0; i < mat.length; i++){
		for(let j = 0; j < mat[0].length; j++){
			if(mat[i][j] === 1){
				dfs(i,j,matrix)
			}
		}
	}
	
	return matrix
}
