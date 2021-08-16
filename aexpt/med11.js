function longestPeak(array) {
  // Write your code here.
	let increasings = {}
	let decreasings = {}
	
	let curStart = 0
	let curIndex = 0
	for(let i = 1; i < array.length; i++){
		if(array[i] > array[i-1]){
			//increasing
			curIndex += 1
		}else{
			//save
			if(curStart !== curIndex){
				increasings[curStart] = curIndex
			}
			//decreasing
			curStart = i
			curIndex = i
		}
	}
	
	if(curStart !== curIndex){
		increasings[curStart] = curIndex
	}
	
	curStart = 0
	curIndex = 0
	for(let i = 1; i < array.length; i++){
		if(array[i] < array[i-1]){
			curIndex += 1
		}else{
			if(curStart !== curIndex){
				decreasings[curStart] = curIndex
			}
			
			curStart = i
			curIndex = i
		}
	}
	
	if(curStart !== curIndex){
		decreasings[curStart] = curIndex
	}
	
	let curMax = 0
	for(const key in increasings){
		if(increasings[key] in decreasings){
			const possibleMax = parseInt(decreasings[increasings[key]]) - parseInt(key) + 1
			curMax = curMax < possibleMax ? possibleMax : curMax
		}
	}
	
	return curMax
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
