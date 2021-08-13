function moveElementToEnd(array, toMove) {
  // Write your code here.
	
	// can do it in 2 N
	
	//reverse loop and find occurrences of toMove
	
	// then check again loop from the last element to see differences and return different occurrences
	
	let firstIndex = 0
	let lastIndex = array.length - 1
	
	let newArray = array.slice()
	
	
	while(lastIndex > firstIndex){
		if(array[firstIndex] !== toMove){
			firstIndex += 1
		}else{
			if(array[lastIndex] === toMove){
				lastIndex -= 1
			}else{
				array[firstIndex] = array[lastIndex]
				array[lastIndex] = toMove
				firstIndex += 1
				lastIndex -= 1
			}
		}
	}
	
	return array
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
