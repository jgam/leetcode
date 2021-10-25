/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(cur1, cur2) {
    let currentArr = []
    

    
    while(cur1 && cur2){
        if(cur1.val > cur2.val){
            currentArr.push(cur2.val)
            cur2 = cur2.next
        }else{
            currentArr.push(cur1.val)
            cur1 = cur1.next
        }
    }
    
    while(cur1){
        currentArr.push(cur1.val)
        cur1 = cur1.next
    }
    
    while(cur2){
        currentArr.push(cur2.val)
        cur2 = cur2.next
    }
    
    function createLL(arr){
        if(arr.length === 0){
            return null
        }
        return new ListNode(arr[0], createLL(arr.slice(1,)))
    }
    
    return createLL(currentArr)
};
