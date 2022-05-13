/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root){
        return root
    }
    // use bfs to construct the tree like structure
    let ret = new Node();
    let currentRet = ret;
    
    let queue = [root];
    let curQueue = [];
    while(queue.length){
        let current = queue.pop();
        
        currentRet.next = new Node(current.val);
        currentRet = currentRet.next;
        
        if(current.left){
            curQueue.unshift(current.left);
        }
        if(current.right){
            curQueue.unshift(current.right);
        }
        
        if(queue.length === 0){
            //add null to the currentRet
            if(curQueue.length > 0){
                currentRet.next = new Node('#');
                currentRet = currentRet.next;
                queue = curQueue;
                curQueue = [];
            }
            
        }
        
    }
    
    return ret.next
    
    
};
