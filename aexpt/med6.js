// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo{
	constructor(isBalanced, height){
		this.isBalanced = isBalanced;
		this.height = height;
	}
}

function heightBalancedBinaryTree(tree) {
  // Write your code here.
	const treeInfo = getTreeInfo(tree);
	return treeInfo.isBalanced;
  return false;
}

function getTreeInfo(node){
	if(node===null) return new TreeInfo(true, -1);
	
	const leftSubtreeInfo = getTreeInfo(node.left);
	const rightSubtreeInfo = getTreeInfo(node.right);
	
	const isBalanced = leftSubtreeInfo.isBalanced && rightSubtreeInfo.isBalanced && Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1;
	const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;
	return new TreeInfo(isBalanced, height);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;
