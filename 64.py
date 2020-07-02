class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        import copy
        
        newArr = copy.deepcopy(grid)
        
        #need exceptional cases
        
        current = 0
        for i in range(len(newArr[0])):
            current += newArr[0][i]
            newArr[0][i] = current
        
        current = 0
        for i in range(len(newArr)):
            current += newArr[i][0]
            newArr[i][0] = current
            
        #pre processing done
        
        #now dp!
        for i in range(1, len(newArr)):
            for j in range(1, len(newArr[0])):
                newArr[i][j] = min(newArr[i-1][j], newArr[i][j-1]) + newArr[i][j]
        
        return newArr[-1][-1]
