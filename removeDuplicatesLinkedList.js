var deleteDuplicates = function(head) {
    let prev = new ListNode(-1, head)
    let newHead = prev
    let cur = head
    while(cur && cur.next) {
        if (cur.val == cur.next.val) {
            while(cur.next && cur.val == cur.next.val) cur = cur.next 
            prev.next = cur.next
        } else prev = prev.next
        cur = cur.next
    }
    return newHead.next  
};
