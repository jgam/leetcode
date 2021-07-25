function apartmentHunting(blocks, reqs) {
  // Write your code here.
	// create arrays for reqs
	// 2 * B * R complexity
	const arrs = reqs.map(req => getMinIdxAt(blocks,req))
	
	//find max vals in arrs and shrink it to a single array
	// B * R * 2
	var newArr = []
	for(const element in blocks){
		newArr.push(Math.max(...arrs.map(arr=>arr[element])))
	}
	
	//finding the minimum and return its index
	// B * 2
	var retValue = Math.min(...newArr)
	
	//total = 2B + 2BR + 2BR
	return newArr.indexOf(retValue)
}

//getting the distances of block position at specific req
// 2 * B complexity
function getMinIdxAt(blocks, req){
	// here get the length at a given index
	const curArr = new Array(blocks.length).fill(Infinity)
	var curIndex = blocks.length
	
	// increasing order
	for(let i = 0; i < blocks.length; i++){
		if(blocks[i][req]){
			//if true then update the counter
			curIndex = i
			curArr[i] = 0
		}else{
			curArr[i] = Math.abs(curIndex - i)
		}
	}
	
	//decreasing order
	for(let i = blocks.length-1; i >= 0; i--){
		if(blocks[i][req]){
			curIndex = i
		}
		curArr[i] = Math.min(curArr[i], Math.abs(curIndex-i))
	}
	
	return curArr
}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;
