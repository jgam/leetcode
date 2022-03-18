function longestIncreasingMatrixPath(matrix) {
  // Write your code here.
	let visited = [];
	for(let i = 0; i < matrix.length; i++){
		let curArr = [];
		for(let j = 0; j < matrix[0].length; j++){
			curArr.push(0);
		}
		visited.push(curArr);
	}
	let solution = -Infinity;
	for(let i = 0; i < matrix.length; i++){
		for(let j = 0; j < matrix[0].length; j++){
			dfs(i,j)
		}
	}
	return solution
	
	function dfs(i,j,prevValue){
		if(i===-1 || j===-1){
			return 0
		}
		if(i===matrix.length || j===matrix[0].length){
			return 0
		}
		
		if(matrix[i][j] <= prevValue){
			return 0;
		}
		
		if(visited[i][j] === 0){
			//unvisited
			let curMaxCount = Math.max(Math.max(dfs(i+1,j,matrix[i][j]), dfs(i-1,j,matrix[i][j])), Math.max(dfs(i,j+1,matrix[i][j]), dfs(i,j-1,matrix[i][j])))
			visited[i][j] = curMaxCount + 1
			solution = Math.max(solution, visited[i][j])
			return curMaxCount + 1;
		}else{
			//visited
			return visited[i][j]
		}
	}
	return solution
}

// Do not edit the line below.
exports.longestIncreasingMatrixPath = longestIncreasingMatrixPath;
