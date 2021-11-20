/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    // dfs function
    function dfs(curHead){
        if(curHead.next){
            const [next, position] = dfs(curHead.next)
            if(position === n){
                curHead.next = next;
            }
            return [curHead.next, position+1]
        }else{
            return [null, 1]
        }
    }
    if(head.next){
        const [next, position] = dfs(head)
        if(position === n){
            head = next;
        }
        return head
    }else{
        if(n > 0){
            return null
        }
    }
};
