/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let stack = []
    let curK = k;
    
    let curNode = new ListNode(0, null);
    let curHead = curNode;
    
    
    while(head){
        if(k === 0){
            //reverse the stack and create new node
            while(stack.length){
                curHead.next = new ListNode(stack.pop(), null)
                curHead = curHead.next;
            }
            // update the k with the original value
            k = curK;
        }
        
        // build stack, decrement k and update head
        stack.push(head.val)
        k -= 1;
        head = head.next;
    }
    
    if(k===0 && stack.length){
        while(stack.length){
            curHead.next = new ListNode(stack.pop(), null)
            curHead = curHead.next;
        } 
    }else if(stack.length){
        for(let i = 0; i < stack.length; i++){
            curHead.next = new ListNode(stack[i], null);
            curHead = curHead.next;
        }
    }
    
    return curNode.next;
};
