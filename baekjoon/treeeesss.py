class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        import copy
        
        copyTree = copy.deepcopy(triangle)
        
        
        for i in range(1,len(triangle)):
            curLen = len(triangle[i-1])
            for j in range(len(triangle[i])):
                if j == 0:
                    copyTree[i][j] = triangle[i][j] + copyTree[i-1][j]
                elif j == curLen:
                    copyTree[i][j] = triangle[i][j] + copyTree[i-1][j-1]
                else:
                    copyTree[i][j] = min(copyTree[i-1][j], copyTree[i-1][j-1]) + triangle[i][j]
                    
        
        return min(copyTree[-1])
