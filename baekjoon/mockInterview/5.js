/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let endIndex = -1
    let startIndex = -1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            if(startIndex !== -1){
                endIndex = i
            }else{
                startIndex = i
            }
        }
    }
    if (startIndex !== -1 && endIndex === -1){
        endIndex = startIndex
    }
    return [startIndex, endIndex]
};
