function staircaseTraversal(height, maxSteps) {
  // Write your code here.
	if(height == 0 ) {
		return 1
	};
	
	if(height < 0){
		return 0
	}
	
	
	let count = 0;
	
	for(let i = 1; i < maxSteps+1; i++){
		if(height-i < 0){
			break
		}else{
			count += staircaseTraversal(height-i, maxSteps)
		}
	}
	
  return count
}

// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;
