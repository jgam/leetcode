function invertBinaryTree(tree) {
  // Write your code here.
	const queue = [tree];
	while(queue.length){
		const current = queue.shift();
		if(current ===null)continue;
		swapLeftAndRight(current);
		queue.push(current.right);
		queue.push(current.left);
	}
}

function swapLeftAndRight(tree){
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
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
exports.invertBinaryTree = invertBinaryTree;
