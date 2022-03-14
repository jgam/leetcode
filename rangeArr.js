function largestRange(array) {
	if(array.length === 1){
		return [array[0], array[0]]
	}
  // Write your code here.
	let obj = {};
	let keys = [];
	let visited = new Set();
	
	for(let elem of array){
		if(elem in obj){
			obj[elem] += 1
		}else{
			obj[elem] = 1;
			keys.push(elem)
		}
	}
	
	let curMax=-Infinity;
	let curStart,curEnd;
	
	for(let key of keys){
		if(visited.has(key)){
			continue
		}else{
			visited.add(key)
			let curCount = obj[key];
			let upper = key+1;
			
			//increase
			while(upper in obj){
				visited.add(upper)
				curCount += obj[upper];
				upper += 1;
			}
			
			let low = key-1;
			//decrease
			while(low in obj){
				visited.add(low)
				curCount += obj[low];
				low -=1;
			}
			
			if(curCount > curMax){
				
				if(low+1 !== upper-1){
					curStart = low+1;
					curEnd = upper-1;
					curMax = curCount
				}
			}
		}
	}
	return [curStart, curEnd];
	
}

// Do not edit the line below.
exports.largestRange = largestRange;
