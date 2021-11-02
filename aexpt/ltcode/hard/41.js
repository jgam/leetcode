/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let curMax = -Infinity
    let curObj = {}
    
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= 0){
            curObj[nums[i]] = 1;
            curMax = Math.max(curMax, nums[i])
        }
    }
    
    for(let i = 1; i < curMax+2; i++){
        if(i in curObj){
            continue
        }else{
            return i
        }
    }
    return 1
    
    
};
