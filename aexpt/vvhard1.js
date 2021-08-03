function globMatching(fileName, pattern) {
  // Write your code here.
	
	//string manipulations - regex problem
	// two patterns * and ? so specify each case while looping through.
	if(pattern === ""){
		if(fileName==="")return true
		else return false
	}
	let fileIndex = 0;
	for(let i = 0; i< pattern.length; i++){
		console.log(i, fileIndex)
		if(pattern[i] === "*"){
			if(fileIndex === fileName.length-1){
				return true
			}
			i += 1
			while(pattern[i] !== fileName[fileIndex] && fileIndex < fileName.length -1){
				console.log(fileName[fileIndex])
				fileIndex += 1
			}
			if(pattern[i] === fileName[fileIndex]){
				i -= 1
			}
		}else if(pattern[i] === "?"){
			//while loop until find 
			if(fileIndex === fileName.length-1){
				return true
			}
			i+=1
			fileIndex+=1
			if(fileIndex > fileName.length - 1){
				return false
			}
			if(pattern[i] !== fileName[fileIndex]){
				return false
			}else{
				i -= 1
			}
		}else if(pattern[i] === fileName[fileIndex]){
			if(fileIndex === fileName.length-1){
				return true
			}
			fileIndex += 1
		}else{
			return false
		}
	}
	if(fileIndex === fileName.length-1){
		return true
	}
}

// Do not edit the line below.
exports.globMatching = globMatching;
