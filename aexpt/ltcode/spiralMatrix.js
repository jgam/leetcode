/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let l = 0;
    let r = matrix[0].length;
    let t = 0;
    let b = matrix.length
    
    let solution = [];
    
    while(l < r && t < b){
        //1
        for(let i = l; i < r; i++){
            solution.push(matrix[t][i])
        }
        //2
        for(let i = t+1; i < b-1; i++){
            solution.push(matrix[i][r-1]);
        }
        //3
        if(t+1 !== b){
            for(let i = r-1; i > l-1; i--){
                solution.push(matrix[b-1][i])
            }
        }
        //4
        if(l+1 !== r){
            console.log(t,b)
            for(let i = b-2; i > t; i--){
                solution.push(matrix[i][l])
            }
        }
        l += 1
        r -= 1
        t += 1
        b -= 1
    }
    return solution
};
