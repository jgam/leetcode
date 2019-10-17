/**test
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length-1;
    var return_array = [...Array(n+1)].map(e => []);
    console.log(return_array);
    for(var i = n; i >= 0; i--){
        for(var j =0; j < n+1; j++){
            return_array[j].push(matrix[i][j]);
        }
    }
    matrix = Object.assign(matrix, return_array);
    return null;
};
//0 2, 2 0

//2 0 2 1 2 2

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
