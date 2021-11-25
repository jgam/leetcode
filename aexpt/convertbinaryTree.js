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
    function invertDFS(head){
        if(head.left && head.right){
            let tmp = head.left;
            
            head.left = head.right;
            head.right = tmp;
            invertDFS(head.left)
            invertDFS(head.right)
        }else if(head.left){
            head.right = head.left;
            head.left = null;
            invertDFS(head.right)
        }else if(head.right){
            head.left = head.right;
            head.right = null;
            invertDFS(head.left);
        }else{
            return;
        }
    }
    
    
    
    if(root){
       invertDFS(root)
        return root
    }
    return null
    
};
