function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
	blueShirtSpeeds.sort((a,b) => a-b);
	if(fastest){
		redShirtSpeeds.sort((a,b) => b-a);
	}else{
		redShirtSpeeds.sort((a,b) => a-b);
	}
	
	let ret = 0;
	for(let i = 0; i < redShirtSpeeds.length; i++){
		ret += Math.max(blueShirtSpeeds[i], redShirtSpeeds[i]);
	}
  return ret
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
