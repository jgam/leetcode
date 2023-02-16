var NumMatrix = function(matrix) {
    this.matrix = matrix;
    this.arr = [];

    for(let i = 0; i < matrix.length; i++){
        let current = [];
        let val = 0;
        for(let j = 0; j < matrix[0].length; j++){
            val += matrix[i][j];
            current.push(val+ ((i !== 0) ? this.arr[i-1][j] : 0));
        }
        this.arr.push(current);
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.arr[row2][col2] - (row1 !== 0 ? this.arr[row1-1][col2] : 0) - (col1 !== 0 ? this.arr[row2][col1-1] : 0) + (row1 !== 0 && col1 !== 0 ? this.arr[row1-1][col1-1] : 0);
};
