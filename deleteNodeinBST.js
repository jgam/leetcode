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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    console.log(root ,key)
    if(!root){
        return null
    }
    
    if(root.val === key){
        //4 possibilities
        // left and right both don exist
        if(!root.left && !root.right){
            return null;
        }else if(!root.left){
            return root.right
        }
        else if(!root.right){
            return root.left
        }else{
            let pointer = root.right;
            while(pointer.left){
                pointer = pointer.left;
            }
            root.val = pointer.val;
            root.right = deleteNode(root.right, root.val)
        }
        //right dont exist
        
        //both exist
    }else if(root.val > key){
        root.left = deleteNode(root.left, key)
    }else{
        root.right = deleteNode(root.right,key)
    }
    
    return root
    
};
