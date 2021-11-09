function cycleInGraph(edges) {
  // Write your code here.
	
	// run dfs but when running dfs, needs to be created new hashMap
	
	
	const numberOfNodes = edges.length;
	const visited = new Array(numberOfNodes).fill(false);
	const currentlyInStack = new Array(numberOfNodes).fill(false);
	
	for(let node = 0; node < numberOfNodes; node++){
		if(visited[node])continue;
		
		const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
		if(containsCycle) return true;
	}
	
	
  return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack){
	visited[node] = true;
	currentlyInStack[node] = true;
	
	const neighbors = edges[node];
	for(const nighbor of neighbors){
		if(!visited[nighbor]){
			const containsCycle = isNodeInCycle(nighbor, edges, visited, currentlyInStack);
			if(containsCycle) return true;
		}else if(currentlyInStack[nighbor]){
			return true
		}
	}
	
	currentlyInStack[node] = false;
	return false;
}

// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;
