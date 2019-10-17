/**test
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length-1;
    var return_array = [...Array(n+1)].map(e => []);
    
    console.log(matrix);
    console.log(matrix[0]);
    console.log(typeof(matrix[0]));
    console.log(matrix[2][0]);
    console.log(typeof(matrix[2][0]));
    console.log(n);
    console.log(return_array[0][2]);
    console.log(return_array[0].push(3));
    console.log(return_array)

    for(var i = n; i >= 0; i--){
        for(var j =0; j < n+1; i++){
            return_array[j][i].push(matrix[i][j]);
        }
    }

    return return_array;



};

console.log(rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]));
