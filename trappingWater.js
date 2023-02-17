/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let lefts = [];
    let rights = [];

    let current = 0;

    for(let i = 0; i < height.length; i++){
        if(height[i] === current){
            lefts.push(0)
        }else if(current > height[i]){
            lefts.push(current)
        }else{
            lefts.push(0);
            current = height[i];
        }
    }

    current = 0;
    for(let i = height.length-1 ; i > -1; i--){
        if(height[i] === current){
            rights.unshift(0);
        }else if(current > height[i]){
            rights.unshift(current);
        }else{
            rights.unshift(0);
            current = height[i]
        }
    }

    let ret = 0;
    
    for(let i = 0; i < height.length; i++){
        let val = Math.min(rights[i], lefts[i]);
        ret += val > 0 ? val - height[i] : 0
    }
    return ret;
};
