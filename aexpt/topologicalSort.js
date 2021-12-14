function topologicalSort(jobs, deps) {
  // Write your code here.
	let curObj = {};
	
	for(let job of jobs){
		curObj[job] = [];
	}
	
	for(let dep of deps){
		const[prerequisite, course] = dep;
		curObj[course].push(prerequisite);
	}
	
	let solution = [];
	let visited = new Set();
	for(let job of jobs){
		var dfsVisited = new Set();
		if(!dfs(job, dfsVisited)){
			return [];
		}
	}
	return solution
	
	
	function dfs(course, curVisited){
		if(curVisited.has(course)){
			return false;
		}
		curVisited.add(course)
		if(visited.has(course)){
			return true;
		}else{
			visited.add(course);
			for(let eachCourse of curObj[course]){
				if(!dfs(eachCourse, curVisited)){
					return false;
				}
				curVisited.delete(eachCourse)
			}	
		}
		solution.push(course)
		return true
	}
}

// Do not edit the line below.
exports.topologicalSort = topologicalSort;
