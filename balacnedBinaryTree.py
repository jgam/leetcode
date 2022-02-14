class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        print(root)
        
        """
            1
           2  2
          3   N 3
        4       N4

        """
        def dfs(node, height=0):
            leftVal = height
            rightVal = height
            leftCond = True
            rightCond = True
            
            if node.left and node.right:
                leftVal, leftCond = dfs(node.left, height+1)
                rightVal, rightCond = dfs(node.right, height+1)
            elif node.left:
                leftVal, leftCond = dfs(node.left, height+1)
            elif node.right:
                rightVal, rightCond = dfs(node.right, height+1)
            else:
                return (height, True)
            
            if not leftCond or not rightCond:
                return (max(leftVal, rightVal), False)
                
            if abs(leftVal - rightVal) < 2:
                return (max(leftVal, rightVal), True)
            return (max(leftVal, rightVal), False)
            
        #exception checking
        if root is None:
            return True
        elif not root.left and not root.right:
            return True
        
        maxHeihgt,cond = dfs(root)
        return cond
