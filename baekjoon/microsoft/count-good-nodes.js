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
    //take the dfs and current max node to be taken
    let ret = 0
    function dfs(curTree, curMax, ret){
        if(curTree.left && curTree.right){
            if(curTree.val >= curMax){
                curMax = curTree.val
                ret += 1   
            }
            let result = dfs(curTree.left,curMax, ret)
            result = dfs(curTree.right,curMax, result[0])
            return result
        }else if(curTree.left){
            if(curTree.val >= curMax){
                curMax = curTree.val
                ret += 1
            }
            let result = dfs(curTree.left, curMax, ret)
            return result
        }else if(curTree.right){
            if(curTree.val >= curMax){
                curMax = curTree.val
                ret += 1
            }
            let result = dfs(curTree.right, curMax, ret)
            return result
            
        }else{
            if(curTree.val >= curMax) return [ret + 1, curTree.val]
            return [ret, curMax]
        }
    }
    
    const result = dfs(root, -Infinity, ret)
    return result[0]
    
};
