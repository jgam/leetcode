function countInversions(array) {
  // Write your code here.
	return countSubArrayInversions(array, 0, array.length);
}

function countSubArrayInversions(array, start, end){
	if (end - start <= 1) return 0;
	
	const middle = start + Math.floor((end - start) / 2);
	const leftInversions = countSubArrayInversions(array, start, middle);
	const rightInversions = countSubArrayInversions(array, middle, end);
	const mergedArrayInversions = mergeSortAndCountInversions(array, start, middle, end);
	return leftInversions + rightInversions + mergedArrayInversions;
}

function mergeSortAndCountInversions(array, start, middle, end){
	const sortedArray = [];
	let left = start;
	let right = middle;
	let inversions = 0;
	
	while(left < middle && right < end){
		if(array[left] <= array[right]){
			sortedArray.push(array[left]);
			left++;
		}else{
			inversions += middle - left;
			sortedArray.push(array[right]);
			right++;
		}
	}
	
	sortedArray.push(...array.slice(left,middle),...array.slice(right,end));
	
	for(let idx = 0; idx < sortedArray.length; idx++){
		const num = sortedArray[idx];
		array[start + idx] = num;
	}
	
	return inversions;
}

// Do not edit the line below.
exports.countInversions = countInversions;
