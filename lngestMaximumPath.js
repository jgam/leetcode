/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    function dfs(i,j,curNum, length){
        if(i === matrix.length || i === -1){
            return length;
        }
        
        if(j=== matrix[0].length || j === -1){
            return length;
        }
        
        if(matrix[i][j] > curNum && visited[i][j] === 0){
            visited[i][j] = 1;
            curNum = matrix[i][j];
            let first = dfs(i+1,j,curNum,length+1);
            let second = dfs(i-1,j,curNum,length+1);
            let third = dfs(i, j+1, curNum,length+1);
            let fourth = dfs(i,j-1, curNum,length+1);
            let maxValue = Math.max(Math.max(first,second),Math.max(third,fourth));
            visitedValues[i][j] = maxValue-length;
            // visited[i][j] = 0;
            return maxValue
        }else if(matrix[i][j] > curNum && visited[i][j] === 1){
            // get value from visitedValues and add to current length;
            return length + visitedValues[i][j];
        }else{
            return length
        }
    }
    
    let visited = [];
    let visitedValues = []
    
    for(let i = 0; i < matrix.length; i++){
        let localArr = []
        let localValues = [];
        for(let j = 0; j < matrix[0].length; j++){
            localArr.push(0);
            localValues.push(0);
        }
        visitedValues.push(localValues);
        visited.push(localArr);
    }
    
    
    let curMax = -Infinity
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            curMax = Math.max(curMax, dfs(i,j,-Infinity, 0))
            visited[i][j] = 1;
        }
    }
    return curMax
    
};
