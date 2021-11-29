/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let curMax = 0;
    let curNegative = -Infinity
    
    for(let i = 0; i < nums.length; i++){
        curNegative = Math.max(curNegative, nums[i])
        curMax += nums[i];
        if(curMax < 0){
            curMax = 0;
        }
        curMax = Math.max(curMax, nums[i])
        sum = Math.max(curMax, sum)
    }
    
    if(curNegative < 0){
        return curNegative
    }
    return sum
};
