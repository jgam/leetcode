function nodeDepths(root) {
  // Write your code here.
	let ret = 0
	function findDepth(root,curDepth){
		ret += curDepth;
		if(root.left){
			findDepth(root.left, curDepth+1)
		}
		if(root.right){
			findDepth(root.right, curDepth+1)
		}
	}
	
	findDepth(root,0)
	return ret
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
