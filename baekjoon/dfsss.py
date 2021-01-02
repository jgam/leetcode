class Solution:
    isopened=False
    def closedIsland(self, grid: List[List[int]]) -> int:
        n,m,res=len(grid),len(grid[0]),0
        for i in range(n):
            for j in range(m):
                if grid[i][j]==0:
                    self.isopened=False
                    self.DFS(grid,i,j,n,m)
                    if not self.isopened:res+=1
        return res
            
    def DFS(self,grid,x,y,n,m):
        if x<0 or y<0 or x>=n or y>=m:
            self.isopened=True
            return
        if grid[x][y]==1: return 
        grid[x][y]=1
        self.DFS(grid,x-1,y,n,m),self.DFS(grid,x+1,y,n,m),self.DFS(grid,x,y-1,n,m), self.DFS(grid,x,y+1,n,m)
