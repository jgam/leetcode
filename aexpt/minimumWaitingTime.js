function minimumWaitingTime(queries) {
  // Write your code here.
	queries.sort((a,b) => a-b);
	
	let ret = 0;
	for(let i = 0; i < queries.length-1; i++){
		ret += queries[i] * (queries.length-1-i)
	}
  return ret;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
