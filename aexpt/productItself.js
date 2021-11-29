/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let lefts = [1];
    let rights = [1];
    
    let curNum = 1;
    for(let i = 0; i < nums.length; i++){
        curNum = curNum * nums[i];
        lefts.push(curNum);
    }
    
    curNum = 1;
    for(let i = nums.length-1; i > -1; i--){
        curNum = curNum * nums[i];
        rights.unshift(curNum)
    }
    
    let solution = [];
    for(let i = 0; i < nums.length;i ++){
        solution.push(lefts[i] * rights[i+1])
    }
    
    return solution
};
