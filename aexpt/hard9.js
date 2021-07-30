function knapsackProblem(items, capacity) {
  // Write your code here.
  // Replace return below.
	const dpArrs = []
	const dpIndices = []
	
	for(let i = 0; i < items.length; i ++){
		let curArr = []
		let indices = []
		for(let j = 0; j < capacity+1; j ++){
			if(i != 0){
				if(j >= items[i][1]){
					//do the knapsack: max number from above or the route with specific weight before
					let curScore = items[i][0]
					let curRemaining = j - items[i][1]
					
					let tobeAdded;
					let tobeIndices;
					if(curScore + dpArrs[i-1][curRemaining] > dpArrs[i-1][j]){
						tobeAdded = curScore + dpArrs[i-1][curRemaining]
						tobeIndices = dpIndices[i-1][curRemaining].slice()
						tobeIndices.push(i)
					}else{
						tobeAdded = dpArrs[i-1][j]
						tobeIndices = dpIndices[i-1][j].slice()
					}
					curArr.push(tobeAdded)
					indices.push(tobeIndices)
				}else{
					curArr.push(dpArrs[i-1][j])
					indices.push(dpIndices[i-1][j])
				}
			}else{
				if(j >= items[i][1]){
					curArr.push(items[i][0])
					indices.push([i])
				}else{
					curArr.push(0)
					indices.push([-1])
				}
			}
		}
		dpArrs.push(curArr)
		dpIndices.push(indices)
	}
	return[
		dpArrs[dpArrs.length-1][dpArrs[0].length-1],
		dpIndices[dpIndices.length-1][dpIndices[0].length-1].filter(x => x >= 0)
	]
}

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;
