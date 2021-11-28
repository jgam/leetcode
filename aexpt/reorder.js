/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let [first, second] = half(head);
    second = reverse(second);
    return merge(first,second)
    //take half
    function half(node){
        let turtlePointer = node;
        let rabbitPointer = node;
        
        while(rabbitPointer.next && rabbitPointer.next.next){
            turtlePointer = turtlePointer.next;
            rabbitPointer = rabbitPointer.next.next;
        }
        
        rabbitPointer = turtlePointer.next;
        turtlePointer.next = null;
        return [node, rabbitPointer]
    }
    
    //reverse
    function reverse(node){
        if(!node || !node.next){
            return node
        }
        let prev = null;
        let current = node;
        let next = node.next;
        
        
        while(next){
            //update node
            node = node.next
            
            //update current Pointer
            current.next = prev;
            
            //update variables
            prev = current;
            current = next;
            next = node.next;
        }
        current.next = prev;
        
        return current;
    }
    
    //merge
    function merge(f,s){
        //always f is greater
        let currentPointer = f;
        let secondPointer = s;
        let ret = currentPointer
        
        while(s){
            //first update the comparable pointers
            f = f.next;
            s = s.next;
            
            //manipulate cur pointers
            secondPointer.next = currentPointer.next;
            currentPointer.next = secondPointer;
            
            //update curPointers to the next level
            currentPointer = currentPointer.next.next;
            secondPointer = s;
        }
        return ret;
    }
};
