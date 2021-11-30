/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let visited = new Map();
    
    function traverse(tree){
        if(visited.has(tree.val)){
            return visited.get(tree.val);
        }else{
            let newNode = new Node();
            visited.set(tree.val, newNode);
            newNode.val = tree.val;
            newNode.neighbors = tree.neighbors.map(eachNeighbor => traverse(eachNeighbor))
            return newNode;
        }
    }
    if(node) return traverse(node)
    return node
};
