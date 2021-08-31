// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
	
	// get two arrays
	const firstArr = dfs(descendantOne, [])
	
	const secondArr = dfs(descendantTwo, [])
	
	if(firstArr.length < secondArr.length){
		firstArr.unshift(...new Array(secondArr.length-firstArr.length).fill(0))
	}else if(secondArr.length < firstArr.length){
		secondArr.unshift(...new Array(firstArr.length-secondArr.length).fill(0))
	}
	
	for(const index in firstArr){
		if(firstArr[index] !== 0 && secondArr[index] !== 0){
			if(firstArr[index].name === secondArr[index].name) return secondArr[index]
		}
	}
	
	return -1
	
	// get dfs for both and find the same node val return
	
	
}

function dfs(curNode, curArr){
	curArr.push(curNode)
	if(curNode.ancestor===null){
		return curArr
	}
	return dfs(curNode.ancestor, curArr)
}

// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
