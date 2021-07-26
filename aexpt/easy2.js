function sortedSquaredArray(array) {
  // Write your code here.
	var newArr = array.map(x => x*x)
	newArr.sort((a,b) => a-b)
  return newArr;
}
