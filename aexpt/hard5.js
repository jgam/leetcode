function minRewards(scores) {
  // Write your code here.
	const curScores = new Array(scores.length).fill(1)
	
	for(let i = 1; i < scores.length; i ++){
		if(scores[i] > scores[i-1]){
			curScores[i] = curScores[i-1] + 1
		}
	}
	
	for(let i = scores.length-2; i > -1; i--){
		if(scores[i] > scores[i+1]){
			curScores[i] = curScores[i+1] + 1 > curScores[i] ? curScores[i+1] + 1 : curScores[i]
		}
	}
	return curScores.reduce((x,y) => x+y)
	
	
	
}

// Do not edit the line below.
exports.minRewards = minRewards;
