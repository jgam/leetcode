function levenshteinDistance(str1, str2) {
  // Write your code here.
	
	//construct 2d array
	const curArrs = []
	
	// construct arrs
	for(let i = 0; i < str1.length+1; i++){
		const newArr = []
		for(let j =0; j< str2.length+1;j++){
			newArr.push(0)
		}
		curArrs.push(newArr)
	}
	
	// initialize some values
	// row
	for(let i = 0; i < curArrs[0].length; i++){
		curArrs[0][i] = i
	}
	
	// column
	for(let i =0; i < curArrs.length; i++){
		curArrs[i][0] = i
	}
	
	console.log(curArrs)
	
	//now loop through to apply the algorithms
	
	/*
	algoriths - so when we encounter the same value from the column to the row
	we have to get value diagonally, otherwise compare the three touching values
	*/
	
	for(let i =1; i < curArrs.length; i++){
		for(let j =1; j< curArrs[0].length; j++){
			if(str2[j-1] === str1[i-1]){
				curArrs[i][j] = curArrs[i-1][j-1]
			}else{
				curArrs[i][j] = Math.min(curArrs[i-1][j], curArrs[i][j-1], curArrs[i-1][j-1])+1
			}
		}
	}
	
	return curArrs[curArrs.length-1][curArrs[0].length-1]
}
