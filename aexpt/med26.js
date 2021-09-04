function removeIslands(matrix) {
  // Write your code here.
	
	// copy return matrix for applying the rmoving islands
	const retMatrix = matrix.map((x) => x.slice())
	
	let count = 0
	// identify the islands with loops e.g(excluding the dots that are touching the outsides)
	for(let i = 0; i < matrix.length; i++){
		for(let j = 0; j < matrix[0].length; j++){
			// run dfs on the matrix
			if(matrix[i][j] === 1){
				const [curEdgeIslandsExist, IslandsArr] = dfs(i,j,[])
				if(curEdgeIslandsExist === 0){
					for(const eachIsland of IslandsArr){
						retMatrix[eachIsland[0]][eachIsland[1]] = 0
					}
					count += 1
				}
			}
		}
	}
	// if yes then remove them from the matrix with given array
	
	// dfs function that returns edge nums + the arras to be revisited
	function dfs(x,y, edge){
		let curNum = 0
		edge.push([x,y])
		matrix[x][y] = 0
		if(x===0 || y ===0){
			curNum += 1
		}
		
		if(x===matrix.length-1 || y===matrix[0].length-1){
			curNum += 1
		}
		
		// now do a four direction
		
		//left
		if(y>1){
			if(matrix[x][y-1] === 1){
				const [num, edg] = dfs(x,y-1,[])
				curNum += num
				edge = [...edge, ...edg]
			}
		}
		
		//right
		if(y < matrix[0].length-1){
			if(matrix[x][y+1] === 1){
				const [num, edg] = dfs(x,y+1,[])
				curNum += num
				edge = [...edge, ...edg]
			}
		}
		
		// top
		if(x > 1){
			if(matrix[x-1][y] === 1){
				const [num, edg] = dfs(x-1,y,[])
				curNum += num
				edge = [...edge, ...edg]
			}
		}
		
		// down
		if(x < matrix.length -1){
			if(matrix[x+1][y] === 1){
				const [num, edg] = dfs(x+1,y,[])
				curNum += num
				edge = [...edge, ...edg]
			}
		}
		return [curNum, edge]
	}
  return retMatrix
}



// Do not edit the line below.
exports.removeIslands = removeIslands;
