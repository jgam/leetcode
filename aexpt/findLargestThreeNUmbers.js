function findThreeLargestNumbers(array) {
  // Write your code here.
	// console.log(array)
	// array.sort((a,b) => a-b);
	// return array.slice(array.length-3,array.length)
	
	let first = -Infinity;
	let second = -Infinity;
	let third= -Infinity;
	
	for(let i= 0; i < array.length; i++){
		console.log(first,second,third)
		if(array[i] > first){
			if(array[i] > second){
				if(array[i] > third){
					let thirdTemp = third;
					let secondTemp = second;
					third = array[i]
					second = thirdTemp;
					first = secondTemp;
				}else{
					let secondTemp = second;
					second = array[i]
					first = secondTemp;
				}
			}else{
				first = array[i]
			}
		}
	}
	return [first, second, third]
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
