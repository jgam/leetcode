function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	redShirtHeights.sort((a,b) => a-b);
	blueShirtHeights.sort((a,b) => a-b);
	let Redbigger = false;
	let blueBigger = false;
	for(let i = 0 ; i < redShirtHeights.length; i++){
		if(blueShirtHeights[i] < redShirtHeights[i]){
			Redbigger = true;
		}else if(blueShirtHeights[i] === redShirtHeights[i]){
			return false
		}else{
			blueBigger = true;
		}
	}
  if(Redbigger && blueBigger){
		return false
	}
	return true
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
