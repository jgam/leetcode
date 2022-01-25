/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    function dfs(node, maxChild){
        if(node.left && node.right){
            return (node.val >= maxChild ? 1 : 0) + dfs(node.left, Math.max(maxChild, node.val)) + dfs(node.right, Math.max(maxChild, node.val))
        }else if(node.left){
            return (node.val >= maxChild ? 1 : 0) + dfs(node.left, Math.max(maxChild, node.val));
        }else if(node.right){
            return (node.val >= maxChild ? 1 : 0) + dfs(node.right, Math.max(maxChild, node.val));
        }else{
            return node.val >= maxChild ? 1 : 0
        }
    }
    
    return dfs(root, root.val)
};
