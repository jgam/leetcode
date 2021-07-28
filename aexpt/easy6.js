// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	const ret = []
	function find(root, curSum){
		curSum += root.value
		if(root.left){
			//call recursively
			find(root.left, curSum)
		}
		
		if(root.right){
			find(root.right, curSum)
		}
		
		if(root.right==null && root.left==null){
			ret.push(curSum)
		}
	}
	
	find(root,0)
	return ret
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
