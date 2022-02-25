/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let dp = [];
    let max = -Infinity;
    
    for(let i = 0; i < matrix.length; i++){
        let curArr = [];
        for(let j = 0; j < matrix[0].length; j++){
            if(i===0 || j===0){
                if(matrix[i][j]==="1"){
                    max = Math.max(max,1)
                    curArr.push(1);
                }else{
                    curArr.push(0);
                }
            }else{
                if (matrix[i][j] === "0"){
                    curArr.push(0)
                }else{
                    let y = j-1;

                    let possibles = [curArr[y], dp[i-1][y], dp[i-1][j]]
                    let minNum = Math.min(...possibles);
                    max = Math.max(max,minNum+1)
                    
                    curArr.push(minNum+1);
                }
            }
        }
        dp.push(curArr)
    }
    return max === -Infinity ? 0 : max**2
};
