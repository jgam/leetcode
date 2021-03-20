# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: ListNode, x: int) -> ListNode:
        #create another linked list
        
        firstRet = []
        secondRet = []
        cur = head
        
        #constructing the list from the LL
        while cur!= None:
            if cur.val < x:
                #then put the node in firstRet
                firstRet.append(cur.val)
            else:
                #put the nodei n the second Ret
                secondRet.append(cur.val)
            cur = cur.next
        
        
        #now construct the LL based on the new created List
        def createLL(arr, index):
            if len(arr) < 1:
                return ListNode("", None)
            if index == len(arr)-1:
                return ListNode(arr[index], None)
            return ListNode(arr[index], createLL(arr, index+1))
        
        return createLL(firstRet+secondRet, 0)
        """
        O(N) * 2 but we can definitely reduce down to O(N)..
        """
