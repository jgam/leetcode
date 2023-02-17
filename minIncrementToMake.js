/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums.sort((a,b) => a-b);
    let max = nums.length;
    let pre = 0;
    let ret = 0;

    console.log(nums)

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < pre){
            ret += pre-nums[i];
            pre += 1;
        }else if(nums[i] >= pre){
            pre = nums[i]+1;
        }
    }
    return ret;
};
