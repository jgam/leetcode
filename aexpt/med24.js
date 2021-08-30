function hasSingleCycle(array) {
  // Write your code here.
	const arr = new Array(array.length).fill(1)
	
	if(array.length === 1){
		if(array[0] === 0){
			return true
		}
		return false
	}
	
	arr[0] = 0
	
	let index = array[0] > 0 ? array[0] : array.length + array[0]
	if(index >= array.length){
		index = index % array.length
	}else if(index < 0){
		index = array.length + (index % array.length)
	}
	
	while(index !==0){
		arr[index] = 0
		if(array[index] + index >= array.length){
			// when index goes over
			index = (array[index] + index) % array.length
			
		}else if(array[index] + index < 0){
			// when index goes backward
			if( ((index + array[index]) % array.length) !== 0){
				index = array.length + ((index + array[index]) % array.length)
			}else{
				index = 0
			}
		}else{
			index += array[index]
		}
		if(arr[index] === 0){
				if(index !==0) return false
				return arr.reduce((a,b) => a+b) === 0
		}else{
			arr[index] = 0
		}
	}
	
	if(arr.reduce((a,b) => a+b) === 1){
		return true
	}
	return false
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
