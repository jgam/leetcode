/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next){
        return head
    }
    
    let prev = null;
    let current = head;
    let next = head.next;
    
    
    
    while(next){
        let curNext = next.next;
        current.next = prev;
        //update variables
        prev = current;
        current = next;
        next = curNext;
    }
    current.next = prev;
    return current;
    
};
