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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let solution = [];
    
    let queue = []
    if(root){
        queue.push(root)
    }
    let childrens = []
    let currentLevel = [];
    
    while(queue.length > 0){
        let curHead = queue.shift();
        
        currentLevel.push(curHead.val);
        if(curHead.left && curHead.right){
            childrens.push(curHead.left);
            childrens.push(curHead.right);
        }else if(curHead.left){
            childrens.push(curHead.left);
        }else if(curHead.right){
            childrens.push(curHead.right);
        }
        
        
        
        if(queue.length === 0){
            solution.push(currentLevel);
            currentLevel = [];
            queue = childrens;
            childrens = [];
        }
    }
    
    return solution
};
