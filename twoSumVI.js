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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let curArr = [];
    let visited = new Set();
    
    dfs(root);
    
    for(let i = 0; i < curArr.length; i++){
        if(visited.has(k-curArr[i]) && k-curArr[i] !== curArr[i]){
            return true
        }
    }
    return false;
    
    function dfs(tree){
        curArr.push(tree.val)
        visited.add(tree.val);
        
        if(tree.left){
            dfs(tree.left)
        }
        
        if(tree.right){
            dfs(tree.right)
        }
        
        return;
    }
    
};
