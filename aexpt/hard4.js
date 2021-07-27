function subarraySort(array) {
  // Write your code here.
	const newArr = array.slice()
	newArr.sort((a,b) => a-b)
	
	var tobeDones = []
	
	for(const index in newArr){
		console.log(index)
		if(newArr[index] != array[index]){
			tobeDones.push(index)
		}
	}
	
	if(tobeDones.length > 0){
		return [parseInt(tobeDones[0]), parseInt(tobeDones[tobeDones.length-1])]
	}else{
		return [-1, -1]
	}
}

// Do not edit the line below.
exports.subarraySort = subarraySort;
