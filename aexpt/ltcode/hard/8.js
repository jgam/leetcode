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
    
    if(lists.length ===0){
        return null
    }
    
    function divideLists(lists,start,end){

        let mid = parseInt((end-start)/2) + start;
        
        if(start === end){
            return lists[start]
        }else if(end - 1 === start){
            return lists[start]
        }else{
            console.log(start, mid, end)
            const left = divideLists(lists,start, mid);
            const right = divideLists(lists,mid, end);
            return merge(left, right)
        }
    }
    
    function merge(left, right){
        let ret = new ListNode(-1, null);
        let curHead = ret;
        while(left && right){
            if(left.val > right.val){
                curHead.next = right
                right = right.next;
            }else{
                curHead.next = left;
                left = left.next;
            }
            curHead = curHead.next
        }
        
        curHead.next = right || left
        return ret.next;
    }
    
    return divideLists(lists,0, lists.length)
};
