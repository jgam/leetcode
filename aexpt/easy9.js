// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
		return this.dfs(this)
  }
	
	dfs(tree){
		let arr = []
		arr.push(tree.name)
		for(const elem of tree.children){
			arr = [...arr, ...this.dfs(elem)]
		}
		return arr
	}
}

// Do not edit the line below.
exports.Node = Node;
