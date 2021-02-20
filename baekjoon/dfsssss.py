class Solution:
    def flatten(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        def dfs(root, tmp):
            #base condition
            if root is None: return None
            
            #recursion
            dfs(root.right,tmp)
            dfs(root.left,tmp)
            root.right = tmp.pop()
            root.left = None
            tmp.append(root)
            return root
        return dfs(root, [None])
