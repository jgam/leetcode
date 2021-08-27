function diskStacking(disks) {
  // Write your code here.
	disks.sort((a,b) => a[2] - b[2]);
	const heights = disks.map(disk => disk[2]);
	const sequences = new Array(disks.length);
	let maxHeightIdx = 0;
	console.log(disks)
	for(let i = 1; i< disks.length; i++){
		const currentDisk = disks[i]
		for(let j =0; j<i;j++){
			const otherDisk = disks[j]
			if(areValidDimensions(otherDisk, currentDisk)){
				if(heights[i] <= currentDisk[2] + heights[j]){
					heights[i] = currentDisk[2] + heights[j]
					sequences[i] = j
				}
			}
		}
		if(heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i
	}
	console.log(heights)
	console.log(sequences)
	return buildSequences(disks, sequences, maxHeightIdx)
}
function areValidDimensions(o,c){
	return o[0] < c[0] && o[1] < c[1] && o[2] < c[2]
}

function buildSequences(array,sequences, currentIdx){
	const sequence = []
	while(currentIdx !== undefined){
		sequence.unshift(array[currentIdx])
		currentIdx = sequences[currentIdx]
	}
	return sequence
}

// Do not edit the line below.
exports.diskStacking = diskStacking;
