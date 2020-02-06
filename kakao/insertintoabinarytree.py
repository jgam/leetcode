# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
        print(val)

        def compareVal(tree, val):
            if tree.val > val:
                if tree.left == None:
                    #tree.left.val, tree.left.left, tree.left.right = val, None, None
                    # here add tree
                    v = TreeNode(val)
                    tree.left = v
                else:
                    compareVal(tree.left, val)
            elif tree.val < val:
                if tree.right == None:
                    #tree.right.val, tree.right.left, tree.right.right = val, None, None
                    v = TreeNode(val)
                    tree.right = v
                else:
                    compareVal(tree.right, val)
            else:
                return 0
        compareVal(root, val)

        return root
