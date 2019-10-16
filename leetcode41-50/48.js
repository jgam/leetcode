/**test
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length-1;
    var return_array = [...Array(n+1)];//.map(e => Array(n+1));;
    
    for(var i = n; i >= 0; i--){
        for(var j =0; j < n+1; i++){
            return_array[j].add(matrix[i][j]);
        }
    }

    return return_array;



};

console.log(rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]));
