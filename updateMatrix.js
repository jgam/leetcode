/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let dp = []
    
    for(let i = 0; i < mat.length; i++){
        let curArr = [];
        for(let j = 0; j < mat[0].length; j++){
            curArr.push(Infinity)
        }
        dp.push(curArr)
    }
    
    //two passes form left top to end
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            if(mat[i][j] === 0){
                dp[i][j] = 0
            }else{
                //top
                if(i > 0){
                    dp[i][j] = Math.min(dp[i][j], dp[i-1][j]+1)
                }
                
                //left
                if(j>0){
                    dp[i][j] = Math.min(dp[i][j], dp[i][j-1]+1)
                }
            }
        }
    }
    
    // vice-versa
    for(let i = mat.length-1; i > -1; i--){
        for(let j = mat[0].length-1; j>-1; j--){
            if(mat[i][j] === 0){
                dp[i][j] = 0;
            }else{
                //bottom
                if(i < mat.length-1){
                    dp[i][j] = Math.min(dp[i][j], dp[i+1][j]+1)    
                }
                
                //right
                if(j < mat[0].length-1){
                    dp[i][j] = Math.min(dp[i][j], dp[i][j+1]+1);
                }
            }
        }
    }
    
    return dp
};
