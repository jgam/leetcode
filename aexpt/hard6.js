function zigzagTraverse(array) {
  // Write your code here.
	// two functions going up and going down
	function goingUp(array, curArr,i,j,totlen,eachlen){
		console.log(curArr,i,j,totlen,eachlen)
		if(i == totlen-1 && j == eachlen-1){
			curArr.push(array[i][j])
			return curArr
		}
		//always start to go up
		while(i >= 0 && j < eachlen){
			curArr.push(array[i][j])
			i -= 1
			j += 1
		}
		i += 1
		j -= 1
		//here determine whether to go right or down
		if(j < eachlen-1){
			// go right
			j += 1
			//call going down function
			return goingDown(array,curArr,i,j,totlen,eachlen)
		}else{
			//go down
			i += 1
			//call going down function
			return goingDown(array,curArr,i,j,totlen,eachlen)
			
		}
	}	
	
	//going down
	function goingDown(array, curArr,i,j,totlen,eachlen){
		if(i == totlen-1 && j == eachlen-1){
			curArr.push(array[i][j])
			return curArr
		}
		//always start to go up
		while(i < totlen && j >= 0){
			curArr.push(array[i][j])
			i += 1
			j -= 1
		}
		//here determine whether to go right or down
		i-=1
		j+=1
		if(j == 0 && i < totlen-1){
			// go doen
			i += 1
			//call going up function
			return goingUp(array,curArr,i,j,totlen,eachlen)
		}else{
			//go right
			j += 1
			//call going up function
			return goingUp(array,curArr,i,j,totlen,eachlen)
			
		}
	}
	const retArr = [];
	if(array.length < 2){
		return array[0]
	}else if(array[0].length < 2){
		array.map(x => retArr.push(x[0]))
		return retArr
	}
	retArr.push(array[0][0])
	
	return goingUp(array,retArr,1,0,array.length, array[0].length)
}



// Do not edit the line below.
exports.zigzagTraverse = zigzagTraverse;
