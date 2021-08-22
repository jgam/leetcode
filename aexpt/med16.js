function inOrderTraverse(tree, array) {
  // Write your code here.
	if(tree.left === null && tree.right===null) {
		return [tree.value]
	}
	
	if(tree.left && tree.right){
		return [...inOrderTraverse(tree.left, array), tree.value, ...inOrderTraverse(tree.right,array)]
	}
	
	if(tree.left) {
		return [...inOrderTraverse(tree.left, array), tree.value]
	}
	if(tree.right) {
		return [ tree.value,...inOrderTraverse(tree.right, array)]
	}
	
	
}

function preOrderTraverse(tree, array) {
  // Write your code here.
	// dfs
	array.push(tree.value)
	if(tree.left===null && tree.right ===null){
		return array
	}
	if(tree.left && tree.right){
		let leftArray = preOrderTraverse(tree.left, array)
		return preOrderTraverse(tree.right, leftArray)
	}
	if(tree.left){
		return preOrderTraverse(tree.left, array)
	}
	if(tree.right)return preOrderTraverse(tree.right, array)
}

function postOrderTraverse(tree, array=[]) {
  // Write your code here.
	if(tree.left ===null && tree.right === null){
		return [tree.value]
	}
	
	if(tree.left && tree.right){
		return [...postOrderTraverse(tree.left),...postOrderTraverse(tree.right), tree.value]
	}
	
	if(tree.left){
		return [...postOrderTraverse(tree.left), tree.value]
	}
	
	if(tree.right){
		return [...postOrderTraverse(tree.right), tree.value]
	}
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
