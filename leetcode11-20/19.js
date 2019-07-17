/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //three pointer to keep track : 1(length) 2(current) 3(one after)
    
    // append a new head
    var start = {
        next: head
    };

    var cursor = head;//cursor
    var prev = start;//prev is start
    var after = head;//target
    var step = n;

    // cursor starts from head
    while (cursor) {
        if (step === 0) {
            //console.log(cursor, prev.val, after.val)
            prev = prev.next;
            after = after.next;
        } else {
            step -= 1;
        }

        cursor = cursor.next;
    }
    prev.next = after.next;//this makes the subtraction of the node.
    //after.next = null;
    return start.next
};