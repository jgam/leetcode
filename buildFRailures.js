function buildFailures(buildRuns) {
  // Write your code here.
	let curMax = 0;
	let curStreak = 0;
	let curHighPercentage = Infinity;
	let increasingOnly = true;
	
	for(let buildrun of buildRuns){

		let localPercentage;
		let totalCount = buildrun.length;
		let firstIdx = binarySearch(buildrun, 0, buildrun.length);
		localPercentage = firstIdx / totalCount * 100;
		if(curHighPercentage > localPercentage){
			curStreak += 1;
			if(curHighPercentage !== Infinity){
				increasingOnly = false
			}
		}else{
			curStreak = 1;
		}
		curHighPercentage = localPercentage;
		curMax = Math.max(curMax, curStreak)
	}
	if(increasingOnly){
		return -1
	}
	
	return curMax
}

function binarySearch(arr,start,end){
	let mid;
	while(start < end){
		mid = parseInt((start+end) /2);
		if(arr[mid]){
			start = mid;
		}else{
			if(arr[mid-1]){
				return mid
			}else{
				end = mid;
			}
		}
	}
	return -1
	
}

// Do not edit the line below.
exports.buildFailures = buildFailures;
