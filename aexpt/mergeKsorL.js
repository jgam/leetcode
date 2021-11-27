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
    
    console.log(lists)
    if(lists.length){
        return divide(lists)
    }
    return null
    
    // divide and merge to use 
    //divide - N(logN)
    function divide(arr){
        if(arr.length === 1){
            return arr[0]
        }else if(arr.length ===2){
            return merge(arr[0], arr[1])
        }
        let curHalf = parseInt(arr.length/2)
        
        let firstArray = arr.slice(0,curHalf);
        let secondArray = arr.slice(curHalf, arr.length);
        
        return merge(divide(firstArray), divide(secondArray));
    }
    
    //Merge - N(N)
    function merge(first, second){
        let curFirst = first;
        let curSecond = second;
        
        let ret = new ListNode();
        let curNode = ret;
        
        while(curFirst && curSecond){
            if(curFirst.val > curSecond.val){
                //curSecond is less
                curNode.next = new ListNode(curSecond.val)
                
                curSecond = curSecond.next;
            }else{
                //curFirst is less
                curNode.next = new ListNode(curFirst.val);
                
                curFirst = curFirst.next;
            }
            curNode = curNode.next
        }
        
        while(curFirst){
            curNode.next = new ListNode(curFirst.val);
            curNode = curNode.next;
            curFirst = curFirst.next;
        }
        
        while(curSecond){
            curNode.next = new ListNode(curSecond.val);
            curNode = curNode.next;
            curSecond = curSecond.next;
        }
        return ret.next;
    }
    
    // total complexity -> N(N * logN)
};
