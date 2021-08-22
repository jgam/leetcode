// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
	return validatingTree(tree, -Infinity, Infinity)
}

function validatingTree(tree, minValue, maxValue){
	if(tree===null)return true
	if(tree.value <minValue || tree.value >= maxValue) return false
	return validatingTree(tree.left, minValue, tree.value) && validatingTree(tree.right, tree.value, maxValue)
	
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
