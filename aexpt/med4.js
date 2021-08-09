// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  // Write your code here.
	// at specific node, you can get the sum of two children (or one)
	
	/*
	1. the maximum subtree diameter
	2. length of the longest path that goes through the root
	*/
	
	let globalMax = 0
	function dfs(tree){
	// returns maximum of child nodes
		if(tree.left && tree.right){
			// here anotehr comparison of updating global variable
			const rightSum = dfs(tree.right);
			const leftSum = dfs(tree.left);

			console.log(rightSum, leftSum)
			//update the global variable accordingly
			if(rightSum + leftSum > globalMax){
				globalMax = rightSum + leftSum;
			}
			return 1 + Math.max(rightSum, leftSum)
		}
		if(tree.left){
			const summ = dfs(tree.left, globalMax)
			if(summ > globalMax){
				globalMax = summ
			}
			return 1 + summ
		}
		if(tree.right){
			const summ = dfs(tree.right, globalMax)
			if(summ > globalMax){
				globalMax = summ
			}
			return 1 + summ
		}
		return 1
	}
	
	
	dfs(tree, globalMax)
	
	return globalMax
	
}



// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;
