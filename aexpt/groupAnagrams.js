function groupAnagrams(words) {
  // Write your code here.
	console.log(words)
	let curObj = {}
	
	for(let word of words){
		let value = word;
		let key = word.split("").sort().join("");
		if(key in curObj){
			curObj[key].push(value)
		}else{
			curObj[key] = [value]
		}
	}
	
	let solution = [];
	for(let key of Object.keys(curObj)){
		solution.push(curObj[key])
	}
	
	return Object.values(curObj)
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
