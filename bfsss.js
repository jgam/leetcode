function degreesOfSeparation(friendsLists, personOne, personTwo) {
  // Write your code here.
	
	// dfs with counter of 6 depth -> remaining names => compare the number of names and return the fewer one: if same return ""
	let visited =new Set();
	let length = Object.keys(friendsLists).length;
	bfs([personOne], 7);
	let firstReturn = length - visited.size;
	visited = new Set();
	bfs([personTwo], 7);
	let secondReturn = length - visited.size;
	
	if(firstReturn === secondReturn){
		return ""
	}else if(firstReturn > secondReturn){
		return personTwo
	}else{
		return personOne
	}
	
	
	function bfs(queue,depth){
		while(queue.length && depth > 0){
			let localQueue = queue;
			let updatedQueue = [];
			while(localQueue.length){
				let person = localQueue.pop();
				if(!(visited.has(person))){
					visited.add(person);
					updatedQueue = updatedQueue.concat(friendsLists[person])
				}
			}
			queue = updatedQueue;
			depth -= 1;
		}
	}
}

// Do not edit the line below.
exports.degreesOfSeparation = degreesOfSeparation;
