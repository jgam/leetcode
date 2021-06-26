func isBalanced(root *TreeNode) bool {
    return visit(root) != -1
}

func visit(root *TreeNode) int {
    if root == nil {
        return 0
    }
    
    left := visit(root.Left)
    if left == -1 {
        return -1
    }
    
    right := visit(root.Right)
    if right == -1 {
        return -1
    }
    
    if abs(left - right) > 1 {
        return -1
    }
    
    return max(left, right) + 1
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    
    return a
}

func max(a, b int) int {
    if a > b {
        return a
    }
    
    return b
}
