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
    let curArr = []
    
    if(!head){
        return null
    }
    
    function getNext(ll){
        curArr.unshift(ll.val)
        if(ll.next){
            return getNext(ll.next)
        }
    }
    
    getNext(head)
    
    function createLL(ll){
        if(ll.length === 0){
            return null
        }else{
            return new ListNode(ll[0], createLL(ll.slice(1,)))
        }
    }
    
    return createLL(curArr)
};
