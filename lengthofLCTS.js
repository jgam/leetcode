/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let curMaxLen = 0;
    let curNum = -Infinity;
    let curLen = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > curNum){
            curLen += 1;
        }else{
            curLen = 1;
        }
        curNum = nums[i]
        curMaxLen = Math.max(curMaxLen, curLen);
    }
    return curMaxLen
};
