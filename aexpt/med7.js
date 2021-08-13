function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	
	//sort the two arrays first
	arrayOne.sort((a,b) => a-b)
	arrayTwo.sort((a,b) => a-b)
	
	//now go through each index to identify smallest sum
	
	let firstIndex = 0
	let firstValue = arrayOne[0]
	let secondIndex = 0
	let secondValue = arrayTwo[0]
	let curMin = Infinity
	
	while(firstIndex < arrayOne.length && secondIndex < arrayTwo.length){
		if(arrayOne[firstIndex] > arrayTwo[secondIndex]){
			if(curMin > arrayOne[firstIndex] - arrayTwo[secondIndex]){
				curMin = arrayOne[firstIndex] - arrayTwo[secondIndex]
				firstValue = arrayOne[firstIndex]
				secondValue = arrayTwo[secondIndex]
			}
			secondIndex += 1
		}else{
			if(curMin > arrayTwo[secondIndex] - arrayOne[firstIndex]){
				curMin = arrayTwo[secondIndex] -arrayOne[firstIndex]
				firstValue = arrayOne[firstIndex]
				secondValue = arrayTwo[secondIndex]
			}
			
			firstIndex += 1
		}
	}
	return [firstValue, secondValue]
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
