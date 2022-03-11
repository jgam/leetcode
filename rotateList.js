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
var rotateRight = function(head, k) {
    let curHead = head;
    
    let prev,next,beginning;
    
    let llLength = 0;
    let lengthPointer = head;
    if(lengthPointer){
        llLength = 1;
    }else{
        return curHead
    }
    while(lengthPointer && lengthPointer.next){
        llLength += 1;
        lengthPointer = lengthPointer.next;
    }
    k = k % llLength;
    
    while(k > 0){
        // if(!curHead || !curHead.next){
        //     return curHead
        // }
        let ptr = curHead;
        beginning = curHead;
        
        while(ptr.next.next !== null){
            ptr = ptr.next;
        }
        
        next = ptr.next;
        //current prev = ptr;
        ptr.next = null;
        next.next = curHead;
        
        curHead = next;
        
        k-=1;
    }
    
    return curHead
};
