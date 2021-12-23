function taskAssignment(k, tasks) {
  // Write your code here.
	let curObj = {}
	for(let i = 0; i < tasks.length; i++){
		if(tasks[i] in curObj){
			curObj[tasks[i]].push(i);
		}else{
			curObj[tasks[i]] = [i];
		}
	}
	
	tasks.sort((a,b) => a-b);
	let solution = [];
	
	for(let i = 0; i < k; i++){
		solution.push([curObj[tasks[i]].pop(),curObj[tasks[tasks.length-1-i]].pop()])
	}

  return solution
}
