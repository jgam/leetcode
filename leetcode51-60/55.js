var canJump = function(nums) {
    let curMax = 0
    for(let i = 0; i < nums.length; i++){
        if(i <= curMax){
            curMax = Math.max(curMax, i + nums[i])
        }
    }
    return curMax >= nums.length-1
};
