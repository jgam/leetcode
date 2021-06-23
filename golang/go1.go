/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func dfs(cur *TreeNode, curSum int, compareSum int) bool {
    if cur.Left == nil && cur.Right == nil{
        return compareSum == curSum + cur.Val
    }
    if cur.Left != nil{
        if dfs(cur.Left, curSum + cur.Val, compareSum) {
            return true
        }
    }
    if(cur.Right!= nil){
        if dfs(cur.Right, curSum + cur.Val, compareSum){
            return true
        }
    }
    
    return false
}

func hasPathSum(root *TreeNode, targetSum int) bool {
    var tn *TreeNode
    if root == tn{
        return false
    }
    return dfs(root, 0, targetSum)
}
