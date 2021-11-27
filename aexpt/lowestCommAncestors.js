/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let firstArr = [];
    let secondArr = []
    
    
    function dfs(curHead,value){
        let head = curHead
        //returns array of visited nodes;
        if(head === value){
            return [[head],true]
        }
        
        if(head.left && head.right){
            const [leftTree, isExist] = dfs(head.left, value);
            if(isExist){
                return [[head, ...leftTree],isExist];
            }else{
                const [rightTree, isExist] = dfs(head.right,value);
                return [[head, ...rightTree],isExist];
            }
        }else if(head.left){
            const [leftTree, isExist] = dfs(head.left, value)
            return [[head, ...leftTree],isExist]
        }else if(head.right){
            const [rightTree, isExist] = dfs(head.right,value);
            return [[head, ...rightTree],isExist]
        }else{
            return [[head], false]
        }
    }
    let nullVal;
    [firstArr, nullVal] = dfs(root, p)
    console.log(firstArr);
    [secondArr, nullVal] = dfs(root,q)
    console.log('second arr',firstArr,secondArr)
    
    while(firstArr.length !== secondArr.length){
        if(firstArr.length > secondArr.length){
            firstArr.pop();
        }else{
            secondArr.pop();
        }
    }
    
    let first;
    let second;
    
    while(firstArr.length){
        first = firstArr.pop();
        second = secondArr.pop();
        
        if(first === second){
            return first
        }
    }
    
    return null
    
    
};
