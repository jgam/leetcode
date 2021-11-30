/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let solution = 0;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j]==="1"){
                solution += 1;
                dfs(i,j)
            }
        }
    }
    
    
    function dfs(x,y){
        if(x < 0 || x > grid.length - 1){
            return;
        }
        
        if(y < 0 || y > grid[0].length-1){
            return;
        }
        
        if(grid[x][y] === "1"){
            grid[x][y] = 0
            return dfs(x+1,y) + dfs(x-1,y) + dfs(x,y+1) + dfs(x,y-1);
        }
        return;
    }
    
    return solution
};
