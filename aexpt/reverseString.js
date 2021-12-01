function reverseWordsInString(string) {
  // Write your code here.
	
	let solution = "";
	let current = "";
	let isSpace = false;
	
	for(let i = string.length-1; i > -1; i--){
		if(string[i] === " "){
			if(!isSpace){
				solution += current;			
				current = " "
				
			}else{
				current = string[i] + current
			}
			isSpace = true;
		}else if(string[i] !== " "){
			if(isSpace){
				solution += current;
				current = string[i]
			}else{
				current = string[i] + current
			}
			isSpace=false;
		}
	}
	solution += current
  return solution;
