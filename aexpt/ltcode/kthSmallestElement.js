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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let curArr = [];
    
    function dfs(node){
        curArr.push(node.val)
        if(node.left && node.right){
            return dfs(node.left) + dfs(node.right)
        }else if(node.left){
            return dfs(node.left)
        }else if(node.right){
            return dfs(node.right)
        }else{
            return null;
        }
    }
    
    dfs(root)
    curArr.sort((a,b) => a-b)
    return curArr[k-1]
};
