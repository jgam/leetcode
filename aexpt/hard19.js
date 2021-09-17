function maximizeExpression(array) {
  // Write your code here.
	const curArr = []
	let locMax = -Infinity
	//first addition
	for(let i =0; i < array.length; i++){
		locMax = Math.max(locMax, array[i])
		curArr.push(locMax)
	}
	console.log(curArr)
	
	//first subtraction
	localMax = -Infinity
	const secondArr = [0]
	for(let i =1; i < array.length; i++){
		localMax = Math.max(localMax, curArr[i-1] - array[i])
		secondArr.push(localMax)
	}
	console.log(secondArr)
	
	//second addition
	localMax = -Infinity
	for(let i =2; i < array.length; i++){
		localMax = Math.max(localMax, secondArr[i-1] + array[i])
		curArr[i] = localMax
	}
	
	//second subtraction
	localMax = -Infinity
	const ret = []
	for(let i =3; i < array.length; i++){
		localMax = Math.max(localMax, curArr[i-1] - array[i])
		ret.push(localMax)
	}
	
  return ret.length > 0 ? Math.max(...ret): 0;
}

// Do not edit the line below.
exports.maximizeExpression = maximizeExpression;
