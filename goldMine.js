/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    // dfs and update visited nodes
    
    let visited = []
    for(let i = 0; i < grid.length; i++){
        let local = []
        for(let j = 0; j < grid[0].length; j++){
            local.push(0)
        }
        visited.push(local);
    }
    
    function dfs(i,j,init=false){
        if(i === -1 || i === grid.length){
            return 0;
        }
        
        if(j === -1 || j === grid[0].length){
            return 0;
        }
        
        if(grid[i][j] !== 0 && visited[i][j] === 0){
            visited[i][j] = 1;
            
            let maxNum = Math.max(Math.max(dfs(i+1, j), dfs(i-1,j)), Math.max(dfs(i,j+1), dfs(i, j-1)))

            visited[i][j] = 0;
            
            return grid[i][j] + maxNum
        }else{
            //already visited?
            return 0;
        }
    }
    let ret = -Infinity
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            console.log(visited)
            let cur = dfs(i,j,true)
            ret = Math.max(ret, cur)
        }
    }
    
    return ret;
    
};
