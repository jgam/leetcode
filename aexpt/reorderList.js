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
    if(!head.next){
        return head
    }
    //split - splits lls into two.
    function split(node){
        let firstPointer = head;
        let secondPointer = head;
        
        while(firstPointer && secondPointer){

            if(secondPointer.next){
                if(secondPointer.next.next){
                    secondPointer = secondPointer.next.next;
                }else{
                    break;
                }
            }else{
                break
            }
            firstPointer = firstPointer.next;
            
        }
        let temp = firstPointer;
        secondPointer = temp.next
        firstPointer.next = null;
        return [head, secondPointer]
    }
    
    let [first, second] = split(head)
    console.log(first, second)
    
    //reverse
    function reverse(node){
        let prev = null;
        let curr = null
        let next = node;
        let temp;
        while(true){
            // move the next pointers reversely
            temp = next.next;
            next.next = curr;
            
            //update node with current next pointer
            node = next
            // then reset prev,cur,next
            prev = curr
            curr = next;
            next = temp;
            if(!next){
                return node
            }
        }
    }
    
    second = reverse(second)
    
    //merge
    function merge(before,after){
        let l1 = before;
        let l2 = after
        while(l2.next){
            //save the actual nexts pointers
            let temp = l1.next;
            let temp2 = l2.next;
            
            //update the nodes
            l1.next = l2;
            l2.next = temp;
            
            //move the pointer of references to before and after to move the scene
            l1 = temp;
            l2 = temp2;
        }
        if(l1.next){
            let temp = l1.next;
            l1.next = l2;
            l1.next.next = temp;
        }else{
            l1.next = l2;
        }
        
        return before;
    }
    
    console.log(merge(first,second))
};
