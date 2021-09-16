function longestCommonSubsequence(str1, str2) {
  // Write your code here.
	if(str1.length < 1 || str2.length < 1){
		return []
	}
	const twoArrays = []
	for(let i = 0; i < str2.length+1; i++){
		twoArrays.push(new Array(str1.length + 1).fill(''))
	}
	
	for(let i = 1; i<str2.length+1; i++){
		for(let j = 1; j<str1.length+1; j++){
			if(str1[j-1] === str2[i-1]){
				// if character is same
				twoArrays[i][j] = twoArrays[i-1][j-1] !== "" ? twoArrays[i-1][j-1]+str2[i-1] : str1[j-1]
			}else{
				// if not equal
				let curMax = twoArrays[i-1][j].length > twoArrays[i][j-1].length ? twoArrays[i-1][j] : twoArrays[i][j-1]
				if(curMax.length > 0){
					twoArrays[i][j] = curMax
				}
			}
		}
	}
	return twoArrays[str2.length][str1.length].split("")
}

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;
