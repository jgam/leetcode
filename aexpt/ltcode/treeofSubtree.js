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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    console.log(root)
    const queue = [root]
    while(queue.length){
        let root = queue.pop();
        if(root.val === subRoot.val){
            if(!checkNotEqual(root.left, subRoot.left) && !checkNotEqual(root.right, subRoot.right)){
                return true
            }
        }
        if(root.left){
            queue.push(root.left)
        }
        if(root.right){
            queue.push(root.right)
        }
    }
    
    return false
    
    //dfs to check if cur value is eqausl to subroot
    function checkNotEqual(treeA, treeB){
        if(treeA === treeB){
            return false
        }else if((treeB!==null && treeA!==null) && treeA.val === treeB.val){
            //need further dfs for two children if exist
            return checkNotEqual(treeA.left,treeB.left) + checkNotEqual(treeA.right, treeB.right)
        }else{
            return true
        }
    }
};
