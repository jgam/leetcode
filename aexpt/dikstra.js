function dijkstrasAlgorithm(start, edges) {
	const visited = [];
	for(let i = 0; i < edges.length; i++){
		visited.push(Infinity);
	}
	
	visited[start] = 0;
	
	let queue = [start];
	let afterVisit = new Set();
	
	while(queue.length){
		const i = queue.shift();
		if(afterVisit.has(i)) continue;
		afterVisit.add(i)
		for(let j = 0; j < edges[i].length; j++){
			const[destination, weight] = edges[i][j];
			queue.push(destination)
			//start to destination VS new weight
			if(visited[destination] > visited[i] + weight){
				visited[destination] = visited[i] + weight;
			}
		}
	}
	
	
	for(let i = 0; i < visited.length; i++){
		if(visited[i] === Infinity){
			visited[i] = -1;
		}
	}
	console.log(visited,start)
	return visited
}

// Do not edit the line below.
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
