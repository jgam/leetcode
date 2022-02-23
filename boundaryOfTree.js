/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
    let solution = [root.val];
    let rightSolution = [];
    
    if(root.left){
        dfsLeft(root.left, true);
    }
    if(root.right){
        dfsRight(root.right, true);
    }
    
    return solution.concat(rightSolution)
    
    function dfsLeft(node, wasFromLeft, onlyBranch=false, hasRightBranch){
        solution.push(node.val);
        if(node.left && node.right){
            if(wasFromLeft){
                dfsLeft(node.left, true);
                dfsLeft(node.right, false, false,true);
            }else{
                if(!onlyBranch){
                    solution.pop();
                }
                dfsLeft(node.left, true);
                dfsLeft(node.right, false,false,true);
            }
        }else if(node.left){
            if(hasRightBranch){
                solution.pop();
            }
            dfsLeft(node.left, true,true);
        }else if(node.right){
            if(hasRightBranch){
                solution.pop();
            }
            dfsLeft(node.right, false,true);
        }
    }
    
    function dfsRight(node, wasFromRight,onlyBranch=false,hasRightBrnach=false){
        console.log('right', node)
        
        rightSolution.unshift(node.val);
        if(node.left && node.right){
            if(wasFromRight){
                dfsRight(node.right, true);
                dfsRight(node.left, false,false,true);
            }else{
                if(!onlyBranch){
                    rightSolution.shift();
                }
                dfsRight(node.right, true);
                dfsRight(node.left, false,false,true);
            }
        }else if(node.left){
            if(hasRightBrnach){
                rightSolution.shift();
            }
            dfsRight(node.left, false,true);
        }else if(node.right){
            if(hasRightBrnach){
                rightSolution.shift()
            }
            dfsRight(node.right, true,true);
        }
    }
};
