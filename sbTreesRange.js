function subtreesWithinRange(tree, range) {
  // Write your code here.
	
	//dfs to specify range and return the count of bsts , the tree itself is validated
	let solution = dfs(tree);
	return solution[0]
	
	function dfs(node, isBST){
		if(node.left && node.right){
			let [leftCount, leftMin,leftMax,LeftchildBST] = dfs(node.left);
			let [rightCount, rightMin,rightMax,RightchildBST] = dfs(node.right);
			
			if((LeftchildBST && RightchildBST) && (node.value > leftMax && node.value <=rightMin) && checkRange(node.value)){
				return [leftCount+rightCount+1, Math.min(leftMax,node.value), Math.max(rightMin, node.value), true]
			}
			return [leftCount+rightCount, Math.min(leftMax,node.value), Math.max(rightMin, node.value), false]
			
		}else if(node.left){
			let [leftCount, leftMin,leftMax,childBST] = dfs(node.left);
			if((childBST && node.value > leftMax) && checkRange(node.value)){
				return [leftCount + 1, Math.min(leftMin, node.value), Math.max(leftMax, node.value), true]
			}
			return [leftCount, Math.min(leftMin, node.value), Math.max(leftMax, node.value), false]
		}else if(node.right){
			let [rightCount, rightMin,rightMax,childBST] = dfs(node.right);
			if((childBST && node.value <= rightMin) && checkRange(node.value)){
				return [rightCount + 1, Math.min(rightMin, node.value), Math.max(rightMax, node.value), true]
			}
			return [rightCount, Math.min(rightMin, node.value), Math.max(rightMax, node.value), false]
		}else{
			//chidl
			if(checkRange(node.value)){
				return [1, node.value,node.value,true]
			}
			return [0, node.value,node.value,false]
		}
	}
	
	function checkRange(val){
		return val >= range[0] && val <=range[1]
	}
}

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.subtreesWithinRange = subtreesWithinRange;
