function threeNumberSum(array, targetSum) {
  // Write your code here.
	const curHash = {}
	array.sort((a,b) => a-b)
	
	for(let i = 1 ; i < array.length; i++){
		for(let j = i+1; j < array.length; j++){
			var curSum = array[i] + array[j]
			
			if(curSum in curHash){
				curHash[curSum].push([i,j])
			}else{
				curHash[curSum] = [[i,j]]
			}
		}
	}
	
	const ret = []
	
	for(let i = 0; i < array.length; i++){
		var curKey = targetSum - array[i]
		if(curKey in curHash){
			// check with first number in key-value
			for(let j = 0; j < curHash[curKey].length; j++){
				if(curHash[curKey][j][0] > i){
					var curArr = [i].concat(...curHash[curKey][j])
					console.log(curArr)
					var newArr = curArr.map(x => array[x])
					newArr.sort((a,b) => a-b)
					ret.push(newArr)
				}
			}
			
		}
	}
	// ret.sort(([a, b], [c, d]) => c - a || b - d);
	return ret
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
