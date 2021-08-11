function maxPathSum(tree) {
  // Write your code here.
	
	let maxVal = -Infinity
	
	dfs(tree)
	
	return maxVal
	
	function getMax(num){
		maxVal = maxVal < num ? num : maxVal
	}
	
	function dfs(tree){
		if(tree.left && tree.right){
			const leftVal = dfs(tree.left)
			const rightVal = dfs(tree.right)
			
			getMax(tree.value + leftVal + rightVal)
			
			const curSum = tree.value + Math.max(leftVal, rightVal)
		
			getMax(curSum)
			
			return curSum
		}
		
		if(tree.left){
			const leftVal = dfs(tree.left)
			getMax(tree.value + leftVal)
			return tree.value + dfs(tree.left)
		}
		
		if(tree.right){
			const rightVal = dfs(tree.right)
			getMax(tree.value + rightVal)
			return tree.value + dfs(tree.right)
		}
		
		getMax(tree.value)
		return tree.value
	}
}

// Do not edit the line below.
exports.maxPathSum = maxPathSum;
