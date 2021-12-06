function getLowestCommonManager(topManager, reportOne, reportTwo) {
  // Write your code here.
	let newMap = new Map();
	let retMap = new Map();
	
	let currentPointer = topManager;
	
	let firstDepth = dfs(currentPointer, newMap, reportOne,1,null,retMap);
	let secondDepth = dfs(currentPointer, newMap, reportTwo,1,null,retMap);
	let firstName = reportOne.name;
	let secondName = reportTwo.name;
	

	
	//while fDepth and sDepth equal, map through
	while(firstDepth !== secondDepth){
		console.log(firstDepth, secondDepth)
		if(firstDepth < secondDepth){
			//increase secondDepth
			secondName = newMap.get(secondName)[0]
			secondDepth -= 1;
		}else{
			//increase firstDepth
			firstName = newMap.get(firstName)[0]
			firstDepth -= 1;
		}
	}
	
	//once equal, move up togetehr to check and return the parent node
	while(firstName !== secondName){
		firstName = newMap.get(firstName)[0];
		secondName = newMap.get(secondName)[0];
	}
	console.log('rt alue is ',firstName)
	return retMap.get(firstName)
}

// This is an input class. Do not edit.
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}

function dfs(node, newMap, curNode, layer,parent,retMap){
	//update the map
	if(!retMap.has(node.name)){
		retMap.set(node.name, node);
	}
	
	if(!newMap.has(node.name)){
		if(parent){
			newMap.set(node.name, [parent.name]);
		}
	}
	
	if(curNode.name === node.name){
		return layer
	}
	
	if(node.directReports.length){
		for(let eachChild of node.directReports){
			let counter = dfs(eachChild, newMap, curNode, layer+1, node,retMap)
			if(counter > 0){
				return counter
			}
		}
	}else{
		return 0
	}
}
// Do not edit the line below.
exports.getLowestCommonManager = getLowestCommonManager;
