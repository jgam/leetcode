class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        currentNum = 1
        counter = 0
        
        if len(grid) < 1:
            return 0
        
        xMax = len(grid)
        yMax = len(grid[0])
        
        def dfs(x,y):
            if x < xMax-1:
                if grid[x+1][y] == "1":
                    grid[x+1][y] = 'x'
                    dfs(x+1,y)
            if x != 0:
                if grid[x-1][y] == "1":
                    grid[x-1][y] = "x"
                    dfs(x-1,y)
            
            if y< yMax-1:
                if grid[x][y+1] == "1":
                    grid[x][y+1] = 'x'
                    dfs(x,y+1)
            if y != 0:
                if grid[x][y-1] == "1":
                    grid[x][y-1] = "x"
                    dfs(x,y-1)

        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1":
                    grid[i][j] = "x"
                    dfs(i,j)
                    counter += 1
        return counter
        
