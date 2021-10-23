/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // have to do two pointers
    let leftIndex = 0
    let rightIndex = height.length-1
    
    //cur max area
    let curMaxArea = 0
    
    while(rightIndex > leftIndex){
        curMaxArea = Math.max(curMaxArea, Math.min(height[rightIndex], height[leftIndex])*(rightIndex-leftIndex))
        if(height[leftIndex] > height[rightIndex]){
            rightIndex -= 1
        }else if(height[leftIndex] < height[rightIndex]){
            leftIndex += 1
        }else{
            rightIndex -= 1
            leftIndex += 1
        }
    }
    return curMaxArea
};
