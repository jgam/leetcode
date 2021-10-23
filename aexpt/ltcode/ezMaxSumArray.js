/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = 0
    let maxSum = 0
    let possibleNegative = -Infinity
    
    for(let i = 0; i < nums.length; i ++){
        currentSum = Math.max(Math.max(currentSum + nums[i], 0), nums[i])
        maxSum = Math.max(maxSum, currentSum)
        possibleNegative = Math.max(possibleNegative, nums[i])
    }
    if(possibleNegative < 0){
        return possibleNegative
    }
    return maxSum
};
