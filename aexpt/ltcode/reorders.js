var reorderList = function(head) {
    let queue = [];
    
    while(head){
        queue.push(head.val)
        head = head.next
    }
    console.log(queue)
    head = new ListNode(queue[0], null)
    let current = head;
    queue.shift();
    while(queue.length>1){
        current.next = new ListNode(queue.pop(), null);
        current = current.next;
        current.next = new ListNode(queue.shift(), null);
        current = current.next;
    }
    
    //if queue length ==1
    if(queue.length){
        current.next = new ListNode(queue.pop(), null);
    }
    
    
    console.log(head)
    return head
};
