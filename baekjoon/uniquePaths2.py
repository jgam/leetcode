class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        for i in range(len(obstacleGrid)):
            for j in range(len(obstacleGrid[0])):
                if obstacleGrid[i][j] == 1:
                    obstacleGrid[i][j] = 0
                else:
                    obstacleGrid[i][j] = 1
        
        #here check again for the first array
        curCond = False
        for i in range(len(obstacleGrid[0])):
            if obstacleGrid[0][i] == 0:
                curCond = True
            if curCond:
                obstacleGrid[0][i] = 0
        
        curCond = False
        for i in range(len(obstacleGrid)):
            if obstacleGrid[i][0] == 0:
                curCond = True
            if curCond:
                obstacleGrid[i][0] = 0
        
        
        for i in range(1, len(obstacleGrid)):
            for j in range(1, len(obstacleGrid[0])):
                if obstacleGrid[i][j] == 0:
                    continue
                else:
                    obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
        
        return obstacleGrid[-1][-1]
