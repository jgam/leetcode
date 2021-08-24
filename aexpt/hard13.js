function maxSumIncreasingSubsequence(array) {
  // Write your code here.
	
	// two arrays : sums and sequences
	const sums = array.map(num => num)
	const sequences = new Array(array.length)
	let maxSumIdx = 0;
	
	for(let i = 0; i < array.length; i++){
		let currentNum = array[i]
		for(let j = 0; j<i; j++){
			const otherNum = array[j]
			if(otherNum < currentNum && sums[j] + currentNum >= sums[i]){
				sums[i] = sums[j] + currentNum
				sequences[i] = j
			}
		}
		
		if(sums[i] >= sums[maxSumIdx]) maxSumIdx = i
	}
	console.log(sums, sequences)
	return [sums[maxSumIdx], buildArr(sequences,array,maxSumIdx)]
	
}

function buildArr(seq, arr, idx){
	const ret = []
	while(idx !== undefined){
		ret.unshift(arr[idx])
		idx = seq[idx]
	}
	
	return ret
}

// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;
