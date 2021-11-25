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
var maxPathSum = function(root) {
    // when left and right exist, we can compare with the solution and update
    let solution = -Infinity;
    
    function dfs(node){
        if(node.left && node.right){
            let leftVal = dfs(node.left)
            let rightVal = dfs(node.right);
            
            solution = Math.max(Math.max(Math.max(solution, leftVal + rightVal + node.val), Math.max(leftVal, rightVal) + node.val),node.val);
            console.log(solution)
            return Math.max(leftVal, rightVal) + node.val;
        }else if(node.left){
            let curVal = dfs(node.left)
            solution = Math.max(Math.max(solution,curVal + node.val), node.val)
            return node.val + Math.max(curVal, 0)
        }else if(node.right){
            let curVal = dfs(node.right);
            solution = Math.max(Math.max(solution,curVal + node.val), node.val)
            
            return node.val + Math.max(curVal, 0)
        }else{
            solution = Math.max(solution, node.val)
            return Math.max(node.val, 0)
        }
    }
    
    if(root){
        dfs(root);
    }
    return solution;
    
};
