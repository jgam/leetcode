# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        ret = []
        retLengh = 0
        
        curNode = head
        retNode = ListNode(0, None)
        conditionalNode = ListNode(0, None)
        
        while True:
            try:
                ret.append(curNode.val)
                curNode = curNode.next
            except:
                break
        
        if len(ret) == 1:
            return head
        elif len(ret) == 0:
            return ListNode("", None)
        
        ret = list(set(ret))
        ret.sort()
        
        def listToLinkedList(inputArr, index):
            if index == len(inputArr)-1:
                return ListNode(inputArr[index], None)
            return ListNode(inputArr[index], listToLinkedList(inputArr, index+1))
        
        return listToLinkedList(ret, 0)
