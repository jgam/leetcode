/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const lefts = []
    let curMax = -Infinity
    
    height.forEach(x => {
        if(x > curMax){
            curMax = x
        }
        lefts.push(curMax)
    })
    
    curMax = -Infinity
    let ret = 0
    
    height.slice().reverse().forEach((x,i) => {
        //update the curMax
        if(x > curMax){
            curMax = x
        }
        
        // //get the area
        // if(i!==0){
        //     //do the compare logic not at the intiials
        //     ret += Math.min(curMax, lefts[height.length-1-i]) - x
        // }
        ret += Math.min(curMax, lefts[height.length-1-i]) - x
        
    })
    
    return ret
};
