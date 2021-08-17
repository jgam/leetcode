function firstDuplicateValue(array) {
  // Write your code here.
	const arrHash = {}
	for(let i = 0; i < array.length; i++){
		if(array[i] in arrHash){
			return array[i]
		}else{
			arrHash[array[i]] = 1
		}
	}
  return -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
