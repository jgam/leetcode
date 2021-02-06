# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        # print(root)

        #node should be called recursively with the distance each reamining
        def dfs(node):
            #create the distance checker
            f = [0] * (distance + 1)
            if not node:
                return f, 0
            if not node.left and not node.right:
                f[0] = 1
                return f, 0
            
            fl, pl = dfs(node.left)
            fr, pr = dfs(node.right)
            # print('this is pl', pl)
            pairs = 0
            
            #calculating the distance here
            for dl, cl in enumerate(fl):
                for dr, cr in enumerate(fr):          
                    if dl + dr + 2 <= distance:
                        pairs += cl * cr
            
            #here increase the distance
            for i in range(distance):
                f[i + 1] = fl[i] + fr[i]
            return f, pl + pr + pairs
        ans = dfs(root)

        return ans[1]
    #2^K*N
        
