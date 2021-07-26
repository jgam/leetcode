function tournamentWinner(competitions, results) {
  // Write your code here.
	const curHash = {}
	
	for(let i = 0; i < competitions.length; i++){
		var curIndex;
		if(results[i] == 0){
			curIndex = competitions[i][1]
		}else{
			curIndex = competitions[i][0]
		}
		
		if(curIndex in curHash){
			curHash[curIndex] += 3
		}else{
			curHash[curIndex] = 3
		}
	}
	
	var ret = ''
	var curScore = 0
	
	for(const key in curHash){
		if(curHash[key] > curScore){
			curScore = curHash[key]
			ret = key
		}
	}
  return ret
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
