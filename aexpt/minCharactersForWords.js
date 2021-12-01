function minimumCharactersForWords(words) {
  // Write your code here.
	console.log(words)
	let curObj = {}
	
	for(let word of words){
		let scopeObj = {}
		for(let i = 0 ; i < word.length; i++){
			let curChar = word[i]
			
			if(curChar in scopeObj){
				scopeObj[curChar] += 1;
			}else{
				scopeObj[curChar] = 1;
			}
			
			if(curChar in curObj){
				curObj[curChar] = Math.max(curObj[curChar], scopeObj[curChar]);
			}else{
				curObj[curChar] = scopeObj[curChar];
			}
		}
	}
	
	let solution = []
	for(let key of Object.keys(curObj)){
		for(let i = 0; i < curObj[key]; i++){
			solution.push(key)
		}
	}
  return solution;
}

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;
