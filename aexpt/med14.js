function mergeOverlappingIntervals(array) {
  // Write your code here.
	array.sort((a,b) => a[0]-b[0])
	console.log(array)
	
	let curArr = [Infinity,-Infinity]
	const retArr = []
	array.forEach((val, index) => {
		if(curArr[1] < val[0]){
			retArr.push(val)
			curArr = val
		}else{
			curArr[1] = Math.max(curArr[1],val[1])
		}
	})
	return retArr
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
