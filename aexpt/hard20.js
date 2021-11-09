function boggleBoard(board, words) {
  // Write your code here.
	let curObj = {}
	for(let i = 0; i < words.length; i++){
		if(words[i][0] in curObj){
			curObj[words[i][0]].push(words[i])
		}else{
			curObj[words[i][0]] = [words[i]]
		}
	}
	let solution = [];
	
	for(let i = 0; i < board.length; i++){
		for(let j = 0; j < board[0].length; j++){
			if(board[i][j] in curObj){
				//rund fs niqqa
				for(let eachWord of curObj[board[i][j]]){
					console.log(eachWord)
					if(dfs(i,j,0,board,eachWord)){
						curObj[board[i][j]] = curObj[board[i][j]].filter(elem => elem !== eachWord)
						solution.push(eachWord)
					}
				}
			}
		}
	}
return solution
	
}
function dfs(i,j,index,matrix,word){
	if(index === word.length){
		return 1;
	}
	if(i < 0 || i > matrix.length-1){
		return 0;
	}
	if(j<0 || j > matrix[0].length-1){
		return 0;
	}
	if(matrix[i][j].length ===2){
		return 0;
	}
	if(matrix[i][j] === word[index]){
		matrix[i][j] += 'a'
		const ret = dfs(i+1,j,index+1,matrix,word) +
		dfs(i-1,j,index+1,matrix,word) +
		dfs(i,j+1,index+1,matrix,word) +
		dfs(i,j-1,index+1,matrix,word) +
		dfs(i+1,j+1,index+1,matrix,word) +
		dfs(i-1,j+1,index+1,matrix,word) +
		dfs(i+1,j-1,index+1,matrix,word) +
		dfs(i-1,j-1,index+1,matrix,word);
		matrix[i][j] = matrix[i][j][0]
		return ret
	}
	return 0
}

// Do not edit the line below.
exports.boggleBoard = boggleBoard;
