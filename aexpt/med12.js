function arrayOfProducts(array) {
  // Write your code here.
	
	const rights = []
	const lefts = []
	let curNum = 1
	
	for(let i = 0; i < array.length; i ++){
		if(i === array.length-1){
			lefts.push(array[i])
		}
		else{
			curNum *= array[i]
			lefts.push(curNum)
		}
	}
	
	curNum = 1
	for(let i = array.length-1; i > -1; i--){
		if(i===0){
			rights.splice(0,0,array[i])
		}else{
			curNum *= array[i]
			rights.splice(0,0,curNum)
		}
	}
	
	const final = []
	
	array.forEach((val, index) => {
		if(index===0){
			final.push(rights[index+1])
		}else if(index === array.length-1){
			final.push(lefts[index-1])
		}else{
			final.push(rights[index+1]*lefts[index-1])
		}
	})
	
	return final
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
