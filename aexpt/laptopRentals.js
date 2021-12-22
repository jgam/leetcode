function laptopRentals(times) {
  // Write your code here.
	let computer = 0;
	let usedLaptops = 0;
	
	const startTimes = times.map(a => a[0]).sort((a,b) => a-b);
	const endTimes = times.map(a=>a[1]).sort((a,b) => a-b);
	
	let startIterator = 0;
	let endIterator = 0;
	
	while(startIterator < times.length){
		if(startTimes[startIterator] >= endTimes[endIterator]){
			usedLaptops--;
			endIterator++;
		}
		usedLaptops++;
		startIterator++;
	}
	
	return usedLaptops;
}

// Do not edit the line below.
exports.laptopRentals = laptopRentals;
