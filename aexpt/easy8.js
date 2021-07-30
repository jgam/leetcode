function firstNonRepeatingCharacter(string) {
  // Write your code here.
	const curString = {};
	for(let char of string){
		char in curString ? curString[char] += 1 : curString[char] = 1;
	}
	for(let i = 0; i<string.length; i++){
		if(curString[string[i]] == 1){
			return i
		}
	}
  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
