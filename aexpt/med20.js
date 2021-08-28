function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
	
	// create array for dynamic programming
	const minNumCoins = new Array(n+1).fill(Infinity)
	// set initial num to 0 because 0 way to pay for 0 dollar
	minNumCoins[0] = 0
	
	//loop through coins we have
	for(const denom of denoms){
		// loop through dp array
		for(let j =0; j < n+1; j++){
			// pocket change coin needs to be less than the amount we are paying
			if(denom <= j){
				// take the least Num by current amount (this is why no need to be sorted) and one denom coin before this
				minNumCoins[j] = Math.min(minNumCoins[j], minNumCoins[j-denom]+1)
			}
		}
	}
	
	//check if returned is Infinity(aka not touched at all no combinations)
	return minNumCoins[n] !== Infinity ? minNumCoins[n] : -1
	
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
