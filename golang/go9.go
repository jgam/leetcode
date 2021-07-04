import(
    "fmt"
)

func getDepth(curRoot *TreeNode, curDepth int) int {
    leftDepth := curDepth
    rightDepth:= curDepth
    if curRoot.Left != nil{
        leftDepth = getDepth(curRoot.Left, curDepth + 1)
    }
    
    if curRoot.Right != nil{
        rightDepth = getDepth(curRoot.Right, curDepth + 1)
    }
    if leftDepth > rightDepth {
        return leftDepth
    } else {
        return rightDepth
    }
}

func maxDepth(root *TreeNode) int {
    if root ==nil{
        return 0
    }
    return getDepth(root, 1)
}
