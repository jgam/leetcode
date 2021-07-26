function twoNumberSum(array, targetSum) {
  // Write your code here.
	const curHash = {}
	for(let i = 0; i < array.length; i++){
		curHash[array[i]] = i
	}
	
	const ret = [];
	
	for(let i = 0; i < array.length; i++){
		if((targetSum - array[i]) in curHash){
			if(curHash[targetSum-array[i]] != i){
				var newArr = [i, curHash[targetSum-array[i]]].map(x => array[x])
				newArr.sort()
				if(ifExist(ret, newArr)){
					ret.push(newArr)
				}
			}
		}
	}
	
	return ret.length > 0 ? ret[0] : ret
}

function ifExist(first,second){
	a = JSON.stringify(first);
	b = JSON.stringify(second);
	var c = a.indexOf(b);
	if(c != -1){
			return false
	}
	return true
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
