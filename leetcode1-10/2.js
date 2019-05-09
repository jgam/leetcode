/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let l3 = new ListNode(0);
//console.log(l3)
var addTwoNumbers = function(l1, l2, a=l3, cond=false) {
    let added = 0
    if(cond){
        added += 1;
    }
    added += l1.val + l2.val;
    if(added > 9){
        added -= 10;
        cond = true;
    }
    else{
        cond = false;
    }
    a.val = added;
    a.next = null;
    
    if(l1.next == null && l2.next == null){
        if(cond){
           let v = new ListNode(0);
           a.next = new ListNode(0);
           return addTwoNumbers(v, v, a.next, cond);
           }
        else{
            return l3;
        }
    }
    else if(l1.next==null && l2.next != null){
        //pass in l2 only
        let v = new ListNode(0);
        a.next = new ListNode(0);
        return addTwoNumbers(v, l2.next, a.next, cond);
        //return 1
    }
    else if(l2.next == null && l1.next != null){
        //pass in l1 only
        let v = new ListNode(0);
        a.next = new ListNode(0);
        return addTwoNumbers(l1.next, v, a.next, cond);
    }
    else{
        //both are valid
        //console.log(addTwoNumbers(l1.next, l2.next, first));
        //console.log('1')
        a.next = new ListNode(0);
        return addTwoNumbers(l1.next, l2.next, a.next, cond);
    }
    return l3;
};