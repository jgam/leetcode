function minHeightBst(array) {
  // Write your code here.
	
	//array is sorteed
	
	// half the array and return left and right of them
	const curIndex = array.length === 1 ? 0 : parseInt(array.length/2)
	const curTree = new BST(array[curIndex])
	
	if(array.length <= 1){
		return curTree
	}else{
		curTree.left = minHeightBst(array.slice(0, curIndex))
    // make sure to not include right when the array length is 2
		if(array.length !== 2) curTree.right = minHeightBst(array.slice(curIndex+1, array.length))
		return curTree
	}
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
