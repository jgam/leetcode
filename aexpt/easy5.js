function findClosestValueInBst(tree, target) {
  // Write your code here.
	function find(tree, ret, target){
		if(Math.abs(target - tree.value) < Math.abs(target - ret)){
			ret = tree.value
		}
		if(tree.left){
			// recursive to the left
			const leftVal = find(tree.left, ret, target)
			ret = Math.abs(target - ret) < Math.abs(target - leftVal) ? ret : leftVal
		}
		
		if(tree.right){
			const rightVal = find(tree.right, ret, target)
			ret = Math.abs(target - ret) < Math.abs(target - rightVal) ? ret : rightVal
		}
		return ret
	}
	
	return find(tree, Infinity, target)
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
