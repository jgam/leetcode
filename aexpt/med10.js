function spiralTraverse(array) {
  // Write your code here.
	
	//starting row, starting column, end row, end column
	
	var sRow = 0
	var sColumn = 0
	var eRow = array[0].length
	var eColumn = array.length;
	
	const ret = []
	
	function goSpiral(startR, startC, endR, endC){
		//first
		ret.push.apply(ret, array[startC].slice(startR, endR))
		//second
		let secondArr = []
		let fourthArr = []
		
		for(let i = startC+1; i < endC-1; i++){
			secondArr.push(array[i][endR-1])
			if(startR !== endR-1){
				fourthArr.push(array[i][startR])
			}
		}
		ret.push.apply(ret, secondArr)
		
		//third
		if(endC-1 !== startC){
			ret.push.apply(ret, array[endC-1].slice(startR,endR).reverse())
		}
		//fourth
		ret.push.apply(ret, fourthArr.reverse())
		
	}
	
	
	while(sRow <eRow && sColumn < eColumn){
		console.log(sRow, eRow)
		goSpiral(sRow, sColumn, eRow, eColumn)
		sRow += 1
		sColumn += 1
		eRow -= 1
		eColumn -= 1

	}
	return ret
	
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
