/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    // am trying to save the island in the form of object ith string? 1 - left, 2 - right, 3 - top, 4 - down
    // to save the form, obviously need to do dfs and check the visited; to keep track
    
    let visited = []
    
    for(let i = 0; i < grid.length; i++){
        visited.push(new Array(grid[0].length).fill(0));
    }
    
    //dfs returns  > 0 if it visits unvisited islands 
    function dfs(i,j,currentString="", tobeAdded="",curDepth=0){
        if(i === visited.length || i === -1){
            return currentString;
        }
        if(j=== visited[0].length || j === -1){
            return currentString;
        }
        
        if(grid[i][j]===1 && visited[i][j] === 0){
            visited[i][j] = 1;
            currentString += tobeAdded + String(curDepth);
            
            
            currentString = dfs(i+1, j, currentString, '4',curDepth+1)
            currentString = dfs(i-1, j, currentString, '3',curDepth+1)
            currentString = dfs(i, j+1, currentString, '2',curDepth+1)
            currentString = dfs(i, j-1, currentString, '1',curDepth+1)
            return currentString;
        }else{
            return currentString
        }
    }
    
    let alreadyVisited = new Set();
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j< grid[0].length; j++){
            if(grid[i][j] === 1){
                let ultimateKey = dfs(i,j,"","0");
                console.log(ultimateKey)
                if(ultimateKey !== ""){
                    if(!(alreadyVisited.has(ultimateKey))){
                        alreadyVisited.add(ultimateKey)
                    }
                }
            }
            
        }
    }
    return alreadyVisited.size
    
    
    
};
