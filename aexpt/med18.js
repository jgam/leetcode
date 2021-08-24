function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	if(array.length ===0){
		return 0
	}
	else if(array.length < 3){
		return Math.max(...array)
	}
	else if(array.length === 3){
		return Math.max(...array, array[2]+array[0])
	}
	const newArr = [array[0], array[1], array[2] + (array[0] > 0 ? array[0]: 0)]
	
	
	for(let i = 3; i < array.length; i++){
		newArr.push(array[i] + Math.max(newArr[i-2], newArr[i-3]))
	}
	
	
	return Math.max(newArr[newArr.length-1], newArr[newArr.length-2])
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
