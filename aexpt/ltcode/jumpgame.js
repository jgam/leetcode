/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let curMaxPossibleIndex = 0
    
    for(let i = 0; i< nums.length; i++){
        if (i <= curMaxPossibleIndex && nums[i] !== 0){
            curMaxPossibleIndex = Math.max(curMaxPossibleIndex, nums[i]+i)
        }
    }
    
    return curMaxPossibleIndex >= nums.length-1 ? true : false
};
