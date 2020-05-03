# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    current = []

    def kthSmallest(self, root: TreeNode, k: int) -> int:
        print(root)
        # add elements until length k then sort.
        # then compare and hcange the number
        currentList = []
        # curMax = 0
        # prevMax = 0
        # cond=False

        def getTree(tree):
            currentList.append(tree.val)

            if tree.right != None:
                print('in right boi')
                getTree(tree.right)

            if tree.left != None:
                print('in left boi')
                getTree(tree.left)

        getTree(root)
        print(currentList)
        index = len(currentList) - k
        currentList.sort()
        return currentList[k-1]

        # get max of current when certain length
