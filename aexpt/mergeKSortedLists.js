/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    function divide(arrays){
        if(arrays.length === 2){
            console.log(arrays[0], arrays[1])
            return merge(arrays[0],arrays[1])
        }else if(arrays.length === 1){
            return arrays[0]
        }else{
            let curHalf = parseInt(arrays.length/2);
            
            return merge(divide(arrays.slice(0, curHalf+1)),divide(arrays.slice(curHalf+1, arrays.length)))
        }
    }
    
    
    function merge(before, after){// return - [firstLinkedList, secondLinkedList]
        const solution = new ListNode()
        let solutionPointer = solution;
        while(before && after){
            if(before.val > after.val){
                solutionPointer.next = new ListNode(after.val);
                after = after.next;
            }else{
                solutionPointer.next = new ListNode(before.val);
                before = before.next;
            }
            solutionPointer = solutionPointer.next;
        }
        
        while(before){
            solutionPointer.next = new ListNode(before.val);
            before = before.next;
            solutionPointer = solutionPointer.next;
        }
         while(after){
            solutionPointer.next = new ListNode(after.val);
            after = after.next;
            solutionPointer = solutionPointer.next;
        }
        
        return solution.next;
    }
    
    
    if(lists.length < 1){
        return null
    }
    return divide(lists)
};
