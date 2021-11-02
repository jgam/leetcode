/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let localMax = -Infinity
    const rights = []
    for(let i = height.length-1; i > -1;i--){
        localMax = Math.max(localMax, height[i])
        rights.unshift(localMax)
    }
    
    localMax = -Infinity;
    let trapped = 0;
    for(let i = 0; i < height.length; i++){
        localMax = Math.max(localMax, height[i])
        trapped += Math.min(localMax, rights[i]) - height[i]
    }
    return trapped
};
