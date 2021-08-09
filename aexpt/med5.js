class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

/*
        1
			2.  3
		4 5.  x. x
	x x 6 7
	  x.x 8x
4 2 5 6 7 8 1 3
*/

function findSuccessor(tree, node) {
  const inOrderTraversalOrder = getInOrderTraversalOrder(tree);
	let found = false;
	for(const eachNode of inOrderTraversalOrder){
		if(found) return eachNode
		if(eachNode === node)found = true;
	}
}

function getInOrderTraversalOrder(node, order=[]){
	if(node === null) return order;
	
	getInOrderTraversalOrder(node.left, order);
	order.push(node);
	getInOrderTraversalOrder(node.right, order);
	
	return order
}
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
