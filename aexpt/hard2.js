function fourNumberSum(array, targetSum) {
  // Write your code here.
	// have an array that is divided into two arrays that contains two sums
	const curHash = {}
	const secondHash = {}
	
	for(let i = 0; i < array.length; i++){
		for (let j = i+1; j < array.length; j++){
			if(array[i]+array[j] in curHash){
				curHash[array[i]+array[j]].push([i,j])
				secondHash[array[i]+array[j]].push([i,j])
			}else{
				curHash[array[i] + array[j]] = [[i,j]]
				secondHash[array[i] + array[j]] = [[i,j]]
			}
		}
	}
	
	const ret = []
	for(const key in curHash){
		const secondKey = targetSum - key
		if(secondKey in secondHash && (secondKey > key || secondKey < 0)){
			for(let a = 0; a < curHash[key].length; a++){
				for(let b =0; b < secondHash[secondKey].length; b++){
					if((curHash[key][a][0] !== secondHash[secondKey][b][0] && curHash[key][a][0] !== secondHash[secondKey][b][1])&&(curHash[key][a][1] !== secondHash[secondKey][b][0] && curHash[key][a][1] !== secondHash[secondKey][b][1])){
						var newArr = curHash[key][a].concat(secondHash[secondKey][b])
						//this sum to check curIndex is not a good way
						var curIndex = newArr.reduce((x,y) => x+y)
						
						//how about sort?
						newArr.sort()
						var curArr = newArr.map(x => array[x])
						ret.push(curArr)
					}
				}
			}
		}
	}
	return Array.from(new Set(ret.map(JSON.stringify))).map(JSON.parse);
	
	/*
	
let set  = new Set(arr.map(JSON.stringify));
let arr2 = Array.from(set).map(JSON.parse);
	*/
	// create a hash map to store 
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
