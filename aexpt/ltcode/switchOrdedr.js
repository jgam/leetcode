var reorderList = function(head) {
    let splitted = split(head);
    let second = reverse(splitted)
    merge(head,second)
    //half
    function split(node){
        let fast = node;
        let slow = node;
  
      while (fast !== null) {
        if (fast.next !== null && fast.next.next !== null) {
          slow = slow.next;
          fast = fast.next.next;
        } else {
          fast = null;
        }
      }

      const secondHalf = slow.next;
      slow.next = null;

      return secondHalf;
    }
    
    //reverse
    function reverse(node){
        let prev = null;
        let curr = node;
        let next = null;
        
        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        return prev
    }
    
    //merge
    function merge(node1, node2){
        let l1 = null;
        let l2 = null;
        while(node2){
            l1 = node1.next;
            l2 = node2.next;
            
            node1.next = node2;
            node2.next = l1;
            node1 = l1;
            node2 = l2;
        }
    }
};
