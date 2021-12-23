	function generateDivTags(numberOfTags) {
  // Write your code here.
	function create(curStack,limit, curDivsUsed, curString){
		if(curDivsUsed < limit){
			//two ways if curStack exists
			if(curStack > 0){
				//both open and lose
				return [...create(curStack+1, limit, curDivsUsed+1, curString+'<div>'), ...create(curStack-1, limit, curDivsUsed, curString+'</div>')]
			}else{
				return [...create(curStack+1, limit, curDivsUsed+1, curString+'<div>')]
			}
		}else{
			//close only
			while(curStack){
				curString += '</div>'
				curStack-=1
			}
			return [curString]
		}
	}
	return create(0,numberOfTags, 0, '')
	
}


// Do not edit the line below.
exports.generateDivTags = generateDivTags;
