/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const arr = []
    if (n%2!==0){
        arr.push(0)
        n = n-1
    }
    for(let i = 1; i < n/2+1; i++){
            arr.push(i)
            arr.push(i*-1)
        }
    return arr
};
