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
    
    let visited = {}
    
    function dfs(node,visited){
        if(node.val in visited){
            return visited[node.val]
        }else{
            visited[node.val] = new Node(node.val, [])
            for(let eachN of node.neighbors){
                visited[node.val].neighbors.push(dfs(eachN, visited))
            }
            
            return visited[node.val]
        }
    }
    if(node){
        return dfs(node, visited)    
    }
    return null
    
    
    
};
