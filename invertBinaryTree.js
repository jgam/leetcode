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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    return dfs(root)
    

    function dfs(node){
        if(!node) return node;
        if(node.left && node.right){
            let left = dfs(node.left);
            let right = dfs(node.right);

            node.right = left;
            node.left = right;
            return node;
        }else if(node.left){
            let left = dfs(node.left);
            node.left = null;
            node.right = left;
            return node
        }else if(node.right){
            let right =dfs(node.right);
            node.right= null;
            node.left = right;
            return node;
        }else{
            return node;
        }

    }
};
