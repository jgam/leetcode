function isMonotonic(array) {
	
	if(array.length < 2){
		return true
	}
  // Write your code here.
	let isIncreasing = false
	let isDecreasing = false
	
	for(let i = 1; i < array.length; i++){
		console.log(array[i] < array[i-1])
		if(array[i] > array[i-1]){
			isIncreasing = true;
		}
		
		if(array[i] < array[i-1]){
			isDecreasing = true;
		}
	}
	
	
	if(isIncreasing && isDecreasing){
		return false
	}
	
	if(!isIncreasing && !isDecreasing){
		return true
	}
	return isIncreasing || isDecreasing
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
